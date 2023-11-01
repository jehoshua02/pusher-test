const PusherClient = require('pusher-js');

console.log('env', {
  PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER,
  PUSHER_APP_ID: process.env.PUSHER_APP_ID,
  PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
  PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
})

async function main() {
  // listen for message on "client"
  const client = new PusherClient(process.env.PUSHER_APP_KEY, {
    cluster: process.env.PUSHER_APP_CLUSTER,
  });
  const channel = client.subscribe('pusher-test-channel');
  channel
    .bind_global((event, data) => {
      if (event.startsWith('pusher:')) {
        return
      }
      console.log(`The event ${event} was triggered with data ${JSON.stringify(data)}`);
    })

  await new Promise(() => {})
}

main()
  .catch(err => {
    console.log('main error', err)
  })
