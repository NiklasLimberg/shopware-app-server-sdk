# Requirements

- Platform specific native routing
- Intuitive webhook listener registration
- Automatic Authorisation and authentication
- Types for each webhook route
- Easy to use TypeScript typical API
- Fully tested

# Platform specifics

- Is platform native routing sufficent? Routes are defined in the manifest xml
  by the app creator we just need match the URL and method
- What should the persitance layer look like?
  - Do we need more than a simple get/set API for the PendingRegistration and
    ShopInfo types?

# Questions

- Does it need logger support? Maybe
- Can developers define custom webhook? Maybe
- Do we have types and/or web hook specifications? Probably there is an
  `/api/_info/events.json` endpoint
  - Can we turn those into TS types? The JSON looks a bit wierd but it's
    workable
- How is versioning handled in web hooks? It does not seem that there are
  breaking changes yet. There are only additions with 6.6, future problem
  - Can we build types for every version? Yes
  - How can we recognise the version? Shopware version is in the webhook
    invocation
  - (Should we even support all versions?) No
- Do we validate the schema web hook invocations (zod)?
- Do we provide mocks for testing by end-users? We shouldn't need to once
  requests are authenticated

```json
[
  {
    "name": "checkout.customer.before.login",
    "class": "Shopware\\Core\\Checkout\\Customer\\Event\\CustomerBeforeLoginEvent",
    "data": {
      "email": {
        "type": "string"
      }
    },
    "aware": [
      "Shopware\\Core\\Framework\\Event\\SalesChannelAware"
    ],
    "extensions": []
  }
]
```
