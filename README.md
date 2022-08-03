# Mpost JavaScript SDK

This SDK aims to help the development of integrations with
[Mpost](https://mpost.co.ke/) that use JavaScript, providing an easy
interface to communicate with
[Mpost's REST API](https://mpost.co.ke/).


## Requirements

To use this SDK, you will need:

- [Node.js **v6.3.0 or above**](https://nodejs.org/)

Node installation will include [NPM](https://www.npmjs.com/), which is
responsible for dependency management.

## Installation

### Node.js

`npm install @mpost/mpost-js-sdk`

`import Mpost from '@mpost/mpost-js-sdk';`


## Usage

This SDK relies heavily on [Promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises),
making it easier to handle the asynchronous requests made to the API. The SDK
provides a `Mpost` object containing several methods which map to the
calls and parameters described in
[Mpost's API documentation](https://mpost.co.ke/).

The following snippet is a generic example of how to use the SDK. If you need
details for a specific module, refer to the
[samples folder](https://github.com/ekbaya/mpost-js-sdk/tree/master/samples).

Before executing any request, you need to authorize the calls to the API:


#### Using a API KEY
```js
const mpost = new Mpost({
  apiKey: "<Your-API-KEY>",
});
```

#### Making requests

You can now use the various methods from the SDK to create delivery requests, fetch delivery requests
and other data. Following the Promises notation, you should use
`.then()`/`.catch()` to handle the successful and failed requests,
respectively.

Most of the calls take an object as the only parameter but please refer to the
API documentation to tune the query as intended.


Get Delivery Requests

```js
mpost.getDeliveryRequests().then((p) => {
  console.log(p);
});
```

Craete Delivery Request

```js
mpost
  .createDeliveryRequest({
    user_id: "1"
    pickup_address: {
        latitude: 37.785834,
        longitude: -122.406417,
        address: "Globe Round About",
        detailed_address: "Sunrays House, Near Globe Cinema Roundabout, Nairobi City"
    },
    delivery_address: {
        latitude: 40.659569,
        longitude: -73.933783,
        address: "Globe Round About",
        detailed_address: "Sunrays House, Near Globe Cinema Roundabout, Nairobi City"
    },
    recipient_name: "Elias Baya",
    recipient_mobile: "0712345678",
    item_type: "Test",
    pickup_time: "2022-02-02 11:11:00"
  })
  .then(data => {
    // TODO Handle data
  })
  .catch(error => {
    // TODO Handle the error
  });
```
Calculate Distance and Delivery Cost
```js
mpost
  .calculateDistance({
    pickup_address: {
        latitude: -0.9534506,
        longitude: 37.0820681
    },
    delivery_address: {
        latitude: -1.046594,
        longitude: 37.060197
    }
  })
  .then(data => {
    // TODO Handle data
  })
  .catch(error => {
    // TODO Handle the error
  });
```

## Available methods

### Delivery

- `getDeliveryRequests(queryObject)`
- `createDeliveryRequest(queryObject)`
- `calculateDistance(queryObject)`

## Contribute to the SDK

If you wish to contribute to this repository and further extend the API coverage in the SDK, here
are the steps necessary to prepare your environment:

1. Clone the repository
2. In the root folder, run `npm install` to install all of the dependencies.
3. The following build tasks are available:
- `npm run build` - Run Microbundle to create a folder 'dist' with ES2015 compatible code.