import Mpost from "@ekbaya/mpost-js-sdk";

//SDK Initialization
const mpost: Mpost = new Mpost({
  apiKey: "de6cad52-1605-446f-a167-14f845d8b5a0",
});

//Testing Delivery Requests
mpost.getDeliveryRequests().then((p) => {
  console.log(`GET DELIVERY REQUESTS DATA======: ${JSON.stringify(p)}`);
})
  .catch(error => {
    console.log(`You request could not be processed`);
  });

//Get A single Delivery Request
mpost.getDeliveryRequestById(130).then((p) => {
  console.log(`GET DELIVERY REQUEST DATA=======: ${JSON.stringify(p)}`);
})
  .catch(error => {
    console.log(`You request could not be processed`);
  });

//Create A new Delivery Request
mpost
  .createDeliveryRequest({
    pickup_address: {
      latitude: "37.785834",
      longitude: "-122.406417",
      address: "Globe Round About",
      detailed_address: "Sunrays House, Near Globe Cinema Roundabout, Nairobi City"
    },
    delivery_address: {
      latitude: "40.659569",
      longitude: "-73.933783",
      address: "Globe Round About",
      detailed_address: "Sunrays House, Near Globe Cinema Roundabout, Nairobi City"
    },
    recipient_name: "",
    recipient_mobile: "0712345678",
    item_type: "Food",
    pickup_time: "2022-02-02 11:11:00"
  })
  .then((p) => {
    console.log(`CREATE DELIVERY REQUEST===== ${JSON.stringify(p)}`);
  })
  .catch(error => {
    console.log(`You request could not be processed`);
  });


//Calculating Distance and Cost of delivery Request
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
    console.log(`CALCULATE DISTANCE DATA========: ${JSON.stringify(p)}`);
  })
  .catch(error => {
    console.log(`You request could not be processed`);
  });