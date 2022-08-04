import Mpost from "@ekbaya/mpost-js-sdk";

const mpost: Mpost = new Mpost({
  apiKey: "dd986892-170f-493d-9e50-b368b8218c32",
});

// mpost.getDeliveryRequests().then((p) => {
//   console.log(`DATA: ${p}`);
// })
//   .catch(error => {
//     console.log(`You request could not be processed`);
//   });

// mpost.getDeliveryRequestById(123).then((p) => {
//   console.log(`DATA: ${p}`);
// })
//   .catch(error => {
//     console.log(`You request could not be processed`);
//   });

// mpost
//   .createDeliveryRequest({
//     pickup_address: {
//       latitude: "37.785834",
//       longitude: "-122.406417",
//       address: "Globe Round About",
//       detailed_address: "Sunrays House, Near Globe Cinema Roundabout, Nairobi City"
//     },
//     delivery_address: {
//       latitude: "40.659569",
//       longitude: "-73.933783",
//       address: "Globe Round About",
//       detailed_address: "Sunrays House, Near Globe Cinema Roundabout, Nairobi City"
//     },
//     recipient_name: "",
//     recipient_mobile: "0712345678",
//     item_type: "Food",
//     pickup_time: "2022-02-02 11:11:00"
//   })
//   .then((p) => {
//     console.log(`Created new Delivery Request ${JSON.stringify(p)}`);
//   })
//   .catch(error => {
//     console.log(`You request could not be processed`);
//   });

mpost
  .calculateDistance({
    pickup_address: {
      latitude: "-0.9534506",
      longitude: "37.0820681"
    },
    delivery_address: {
      latitude: "-1.046594",
      longitude: "37.060197"
    }
  })
  .then((p) => {
    console.log(`Data ${JSON.stringify(p)}`);
  })
  .catch(error => {
    console.log(`You request could not be processed`);
  });