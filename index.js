import Pusher from 'pusher-js';

async function main() {
  const received = false

  // subscribe to pusher channel
  const pusher = new Pusher(process.env.APP_KEY, {
    cluster: process.env.APP_CLUSTER,
  });
  const channel = pusher.subscribe('pusher-test-channel');

  // wait for message
  await new Promise((resolve) => {
    channel.bind_global((event, data) => {
      console.log(`The event ${event} was triggered with data ${data}`);
      resolve()
    })
  })
}

main()
