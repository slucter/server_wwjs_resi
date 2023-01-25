const qrCode = require('qrcode')

module.exports = (io, socket, client) => {
    const ready = () => {
            socket.emit('message', 'Whatsap ready !')
    }
    const createQR = (payload) => {
        qrCode.toDataURL(payload, (err, url) => {
            if (err) socket.emit('message', 'ADA ERROR ' +err)
            socket.emit('qr', url)
            socket.emit('message', 'QR Code received!')
        })
    }
    const authenticated = () => {
        socket.emit('message', 'Whatsapp Successfully Authenticated !')
        socket.emit('authenticated', 1)
    }
    const authFailure = () => {
        socket.emit('message', `Auth failure, restarting...`);
        socket.emit('authenticated', 2)
    }
    const disconnected = () => {
        socket.emit('message', `Whatsapp Disconnected`);
        client.destroy();
        client.initialize();
    }

    client.on('qr', createQR)
    client.on('ready', ready)
    client.on('authenticated', authenticated)
    client.on('auth_failure', authFailure)
    client.on('disconnected', disconnected)

    client.on('message', (message) => {
        if (message.body === 'apa') {
            message.reply('Apaan')
        }
    })

}