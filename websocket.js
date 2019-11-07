const WebSocket = require('ws');

const dataTypes = {
    NEW_MESSAGE: 'new_message',
    JOIN: 'join',
    PLAY: 'play',
    PAUSE: 'pause',
    VOLUME_UP: 'volume_up',
    VOLUME_DOWN: 'volume_down'
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
        // console.log(`Added user ${dataFromClient.username} to trip chat ${dataFromClient.tripId}`);

        // const response = {
        //     message: dataFromClient.message,
        //     username: dataFromClient.username
        // };
    }

    const handleNewMessage = (dataFromClient, ws) => {
        const response = {
            type: dataFromClient.type,
        }
        if (dataFromClient.message)
            response.message = dataFromClient.message;

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
                    handleNewMessage(dataFromClient, ws)
                    break;
                default:

            }
        });
    });
}

module.exports = {
    injectWebSocket
}