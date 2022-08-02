"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mpost_js_sdk_1 = __importDefault(require("mpost-js-sdk"));
const client = new mpost_js_sdk_1.default({
    apiKey: "123",
});
client.getDeliveryRequests().then((p) => {
    console.log(p);
});
