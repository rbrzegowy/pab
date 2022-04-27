import amqp from 'amqplib/callback_api';

const MBQueueName = 'weather'
let MBChannel: amqp.Channel;

function main(): void {
    // 1. connect
    amqp.connect(onMBConnect)
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
    // channel.consume(MBQueueName, onMBMessage)
    channel.consume(MBQueueName, onMBMessage, { noAck: true })
}
function onMBMessage(data: any) {
    const msg = data?.content.toString() || ''
    console.log(msg)
}