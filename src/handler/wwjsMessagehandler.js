module.exports = (io, socket, client) => {
    const onHello = (message) => {
        if (message.body === 'ir') {
            message.reply('apaa');
        }
    }
    
    client.on('message', onHello)
}