const WebSocket = require('ws');

const dataTypes = {
    NEW_MESSAGE: 'new_message',
    JOIN: 'join',
    PLAY: 'play',
    PAUSE: 'pause',
    VOLUME_UP: 'volume_up',
    VOLUME_DOWN: 'volume_down',
    LOAD_VIDEO: 'load_video',
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

    const sendMessage = (msg, ws) => {
        clients.forEach((client) => {
            if (client != ws) {
                client.send(msg)
            }
        });
    }

    const addClientToChat = (dataFromClient, ws) => {
        ws.name = randName();
        clients.push(ws);
        ws.send(JSON.stringify({ type: dataTypes.JOIN, name: ws.name }));
    }

    const handleNewMessage = (dataFromClient, ws) => {
        const response = {
            ...dataFromClient,
        }

        sendMessage(JSON.stringify(response), ws);
    }

    wss.on('connection', function (ws, request, client) {
        ws.isAlive = true;
        console.log('New connection for user: ', request.connection);
        console.log('With headers:', request.headers);

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
                case dataTypes.VOLUME_UP:
                case dataTypes.VOLUME_DOWN:
                case dataTypes.LOAD_VIDEO:
                default:
                    handleNewMessage(dataFromClient, ws);
            }
        });

        ws.on(dataTypes.PONG, heartbeat);
    });

    function heartbeat() {
        console.log('Got pong from:', this.name);
        this.isAlive = true;
    }

    setInterval(() => {
        clients = clients.filter(ws => {
            if (!ws.isAlive)
                ws.terminate();
            return ws.isAlive;
        });
        const data = {
            type: dataTypes.CLIENTS_INFO,
            clients: clients.map(ws => ws.name)
        };
        clients.forEach(ws => {
            ws.isAlive = false;
            ws.ping();
            sendClientsInfo(data, ws);
        });
    }, 30000);
}

function sendClientsInfo(data, ws) {
    ws.send(JSON.stringify(data));
}

function randName() {
    const length = 10;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-0123456789';
    return Array(length).fill('').map(() => characters[Math.floor(Math.random() * characters.length)]).join('');
}

module.exports = {
    injectWebSocket
};
