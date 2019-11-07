const WebSocket = require('ws');

const dataTypes = {
    NEW_MESSAGE: 'new_message',
    JOIN: 'join',
    PLAY: 'play',
    PAUSE: 'pause',
    VOLUME_UP: 'volume_up',
    VOLUME_DOWN: 'volume_down',
    LOAD_VIDEO: 'load_video'
}

const clients = [];


function injectWebSocket(server) {
    const wss = new WebSocket.Server({ server });
    injectConfiguration(wss);

    return wss;
}

function injectConfiguration(wss) {

    const sendMessage = (json, ws) => {
        clients.forEach((client) => {
            if (client != ws) {
                client.send(json)
            }
        });
    }

    const addClientToChat = (dataFromClient, ws) => {
        clients.push(ws);
    }

    const handleNewMessage = (dataFromClient, ws) => {
        const response = {
            ...dataFromClient,
        }

        sendMessage(JSON.stringify(response), ws);
    }

    wss.on('connection', function (ws) {
        console.log('new connection');

        ws.on('message', function(message) {
            console.log(message);
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
                    handleNewMessage(dataFromClient, ws)
            }
        });
    });
}

module.exports = {
    injectWebSocket
}