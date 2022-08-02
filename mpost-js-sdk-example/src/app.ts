import Mpost from "mpost-js-sdk";

const client: Mpost = new Mpost({
  apiKey: "123",
});

client.getDeliveryRequests().then((p) => {
  console.log(p);
});

// client
//   .createDeliveryRequest({
//     title: "test",
//     body: "test",
//     userId: 1,
//   })
//   .then((p) => {
//     console.log(`Created new post with id ${p.id}`);
//   });

//   client
//   .calculateDistance({
//     title: "test",
//     body: "test",
//     userId: 1,
//   })
//   .then((p) => {
//     console.log(`Created new post with id ${p.id}`);
//   });