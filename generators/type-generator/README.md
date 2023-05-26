# Type generation

The types provided by this SDK are generated based on the business-events dumped by the [api
/_info/events.json Route](https://shopware.stoplight.io/docs/admin-api/1aeb6f2988e7d-get-business-events) command. The output of that command looks like this:

```json
[
  {
    "extensions": [],
    "name": "checkout.customer.before.login",
    "class": "Shopware\\Core\\Checkout\\Customer\\Event\\CustomerBeforeLoginEvent",
    "data": {
      "email": {
        "type": "string"
      }
    },
    "aware": [
      "salesChannelAware",
      "Shopware\\Core\\Framework\\Event\\SalesChannelAware",
      "mailAware",
      "Shopware\\Core\\Framework\\Event\\MailAware",
      "emailAware",
      "Shopware\\Core\\Content\\Flow\\Dispatching\\Aware\\EmailAware"
    ]
  },
  {
    "extensions": [],
    "name": "checkout.customer.changed-payment-method",
    "class": "Shopware\\Core\\Checkout\\Customer\\Event\\CustomerChangedPaymentMethodEvent",
    "data": {
      "customer": {
        "type": "entity",
        "entityClass": "Shopware\\Core\\Checkout\\Customer\\CustomerDefinition"
      }
    },
    "aware": [
      "salesChannelAware",
      "Shopware\\Core\\Framework\\Event\\SalesChannelAware",
      "customerAware",
      "Shopware\\Core\\Framework\\Event\\CustomerAware",
      "mailAware",
      "Shopware\\Core\\Framework\\Event\\MailAware"
    ]
  }
]
```

This list of business events can then be used to generate all event types, based on the web hook shape outlined in the [webhook documentation](https://developer.shopware.com/docs/guides/plugins/apps/webhook). But with the mayor caveat that we dont know what will be in the payload if the data type provided is just `"entityClass": "Shopware\\Core\\Checkout\\Customer\\CustomerDefinition"`.

```json
{
  "data":{
    "payload":[
      {
        "entity":"product",
        "operation":"delete",
        "primaryKey":"7b04ebe416db4ebc93de4d791325e1d9",
        "updatedFields":[
        ]
      }
    ],
    "event":"product.written"
  },
  "source":{
    "url":"http:\/\/localhost:8000",
    "appVersion":"0.0.1",
    "shopId":"dgrH7nLU6tlE",
    "eventId": "7b04ebe416db4ebc93de4d791325e1d9"
  },
  "timestamp": 123123123
}
```
