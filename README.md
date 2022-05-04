# Facets Microservice Client SDK for Node.js

This is a Node.js client SDK for [service-facets](https://github.com/pip-services-infrastructure2/service-facets-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP client
* Seneca client (see http://www.senecajs.org)
* Direct client for monolytic deployments
* Null client to be used in testing

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-facets-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('client-facets-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.FacetsHttpClientV1(config);

// Connect to the microservice
await client.open(null);

// Work with the microservice
...
```

Now the client is ready to perform operations
```javascript
// Record facets for a user
let partyFacets = await client.addFacet(
    null,
    'statistics',
    '12234'
);
```

```javascript
// Get the list of user facets
let partyFacets = await client.getFacetsByGroup(
    null,
    'statistics'
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

