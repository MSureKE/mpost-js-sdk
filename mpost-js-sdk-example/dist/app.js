"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mpost_js_sdk_1 = __importDefault(require("@ekbaya/mpost-js-sdk"));
const mpost = new mpost_js_sdk_1.default({
    apiKey: "dd986892-170f-493d-9e50-b368b8218c32",
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
    console.log(`Data ${JSON.stringify(p)}`);
})
    .catch(error => {
    console.log(`You request could not be processed`);
});
