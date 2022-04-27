import amqp from 'amqplib/callback_api';

const MBQueueName = 'weather'
let MBChannel: amqp.Channel;

function main(): void {
    // 1. connect
    amqp.connect('amqp://localhost', onMBConnect)
}
main()

function onMBConnect(err: any, conn: amqp.Connection): void {
    if (err) {
        throw err
    }
    conn.createChannel(onMBChannelCreate)
}

function onMBChannelCreate(err: any, channel: amqp.Channel): void {
    if (err) {
        throw err
    }
    MBChannel = channel
    channel.assertQueue(MBQueueName)
    setInterval(() => {
        const date = new Date().toLocaleString()
        sendMessage(`bloody sunny sunday ${date}`)
    }, 1000)

}
function sendMessage(msg: string): void {
    const binMsg = Buffer.from(msg)
    MBChannel.sendToQueue(MBQueueName, binMsg)
}