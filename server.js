const PusherServer = require('pusher')

console.log('env', {
  PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER,
  PUSHER_APP_ID: process.env.PUSHER_APP_ID,
  PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
  PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
})

async function main() {
  // publish message on "server"
  const server = new PusherServer({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
  })
  await server
    .trigger('pusher-test-channel', 'test_event', { message: 'hello world' })
    .catch(err => {
      console.log('trigger error', err)
    })
}

main()
  .catch(err => {
    console.log('main error', err)
  })
