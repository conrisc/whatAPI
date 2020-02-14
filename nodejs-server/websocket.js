const WebSocket = require('ws');

const dataTypes = {
    NEW_MESSAGE: 'new_message',
    JOIN: 'join',
    PLAY: 'play',
    PAUSE: 'pause',
    NEXT_SONG: 'next_song',
    PREV_SONG: 'prev_song',
    SET_VOLUME: 'set_volume',
    LOAD_VIDEO: 'load_video',
    PLAYER_STATE: 'player_state',
    PING: 'ping',
    PONG: 'pong',
    CLIENTS_INFO: 'clients_info'
}

let clients = [];

function injectWebSocket(server) {
    const wss = new WebSocket.Server({ server });
    injectConfiguration(wss);

    return wss;
}

function injectConfiguration(wss) {

    wss.on('connection', function (ws, request) {
        ws.isAlive = true;
        ws.ip = request.connection.remoteAddress;

        ws.on('message', function(message) {
            console.log('ws <message>: ', message);
            const dataFromClient = JSON.parse(message);
            switch(dataFromClient.type) {
                case dataTypes.JOIN:
                    addClientToChat(dataFromClient, ws);
                    break;
                case dataTypes.NEW_MESSAGE:
                case dataTypes.PLAY:
                case dataTypes.PAUSE:
                case dataTypes.NEXT_SONG:
                case dataTypes.PREV_SONG:
                case dataTypes.SET_VOLUME:
                case dataTypes.LOAD_VIDEO:
                case dataTypes.PLAYER_STATE:
                    handleNewMessage(dataFromClient, ws);
                    break;
                default:
                    break;
            }
        });

        ws.on(dataTypes.PONG, heartbeat);
    });

    setInterval(() => {
        clients = clients.filter(ws => {
            if (!ws.isAlive)
                ws.terminate();
            return ws.isAlive;
        });
        const clientsInfo = gatherClientsInfo();
        clients.forEach(ws => {
            ws.isAlive = false;
            ws.ping();
            sendMessage(clientsInfo, ws);
        });
    }, 30000);
}

function heartbeat() {
    console.log('Got pong from:', this.name);
    this.isAlive = true;
}

function addClientToChat (dataFromClient, ws) {
    ws.name = randName();
    clients.push(ws);
    sendMessage({ type: dataTypes.JOIN, name: ws.name }, ws);
    sendMessage(gatherClientsInfo(), ws);
}

function broadcastMessage(data, ws, targets = []) {
    const targetClients = targets.length > 0 ?
        clients.filter(client => !!targets.find(targetName => targetName === client.name)) :
        clients;
    targetClients.forEach((client) => {
        if (client != ws) {
            sendMessage(data, client);
        }
    });
}

function sendMessage(data, ws) {
    ws.send(JSON.stringify(data));
}

function handleNewMessage (dataFromClient, ws) {
    const response = {
        ...dataFromClient,
        origin: ws.name
    }

    broadcastMessage(response, ws, dataFromClient.targets);
}

function gatherClientsInfo() {
    const data = {
        type: dataTypes.CLIENTS_INFO,
        clients: clients.map(ws => ({ name: ws.name, ip: ws.ip }))
    };
    return data;
}

function randName() {
    const length = 10;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-0123456789';
    return Array(length).fill('').map(() => characters[Math.floor(Math.random() * characters.length)]).join('');
}

module.exports = {
    injectWebSocket
};
