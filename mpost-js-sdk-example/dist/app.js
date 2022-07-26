"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mpost_js_sdk_1 = __importDefault(require("@ekbaya/mpost-js-sdk"));
const mpost = new mpost_js_sdk_1.default({
    apiKey: "de6cad52-1605-446f-a167-14f845d8b5a0",
});
mpost.getDeliveryRequests().then((p) => {
    console.log(`GET DELIVERY REQUESTS DATA======: ${JSON.stringify(p)}`);
})
    .catch(error => {
    console.log(`You request could not be processed`);
});
mpost.getDeliveryRequestById(130).then((p) => {
    console.log(`GET DELIVERY REQUEST DATA=======: ${JSON.stringify(p)}`);
})
    .catch(error => {
    console.log(`You request could not be processed`);
});
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
