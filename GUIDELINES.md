## ALKES PUBLIC API

Alkes API is a wrapper of Ministry of Health medical equipment site : [http://infoalkes.kemkes.go.id/](http://infoalkes.kemkes.go.id/) both for foreign and domestic equipments. The data is updated daily through our internal crawling tools.

### SEARCH ENGINE

We use [typesense](https://typesense.org) as the search engine. Basically, you can refer to their documentation site to gain advantages over typesense SDK and APIs: https://typesense.org/docs/.

### DATA SCHEMA

<details>
<summary>Click here</summary>
<pre>
[
    {
      "facet": false,
      "name": "id",
      "type": "string"
    },
    {
      "facet": false,
      "name": "published_date",
      "type": "string"
    },
    {
      "facet": false,
      "name": "expired_date",
      "type": "string"
    },
    {
      "facet": false,
      "name": "product_name",
      "type": "string"
    },
    {
      "facet": false,
      "name": "product_desc_id",
      "type": "string"
    },
    {
      "facet": false,
      "name": "product_desc_en",
      "type": "string"
    },
    {
      "facet": true,
      "name": "product_class",
      "type": "string"
    },
    {
      "facet": true,
      "name": "product_type",
      "type": "string"
    },
    {
      "facet": true,
      "name": "product_type_class",
      "type": "string"
    },
    {
      "facet": true,
      "name": "product_type_risk",
      "type": "string"
    },
    {
      "facet": true,
      "name": "registrant",
      "type": "string"
    },
    {
      "facet": false,
      "name": "registrant_address",
      "type": "string"
    },
    {
      "facet": true,
      "name": "producer",
      "type": "string"
    },
    {
      "facet": true,
      "name": "producer_country",
      "type": "string"
    },
    {
      "facet": true,
      "name": "verification_status",
      "type": "string"
    },
    {
      "facet": true,
      "name": "verification_src",
      "type": "string"
    }
  ]
</pre>
</details>
Data schema is pretty much self explanatory. To clarify things, here are some explanations:

- `product_class` is given from Kemenkes, while `product_type` is product type by producer.
- `product_type_class` and `product_type_risk` are product class categorization by Kemenkes based on its risk factor. See here: http://regalkes.kemkes.go.id/informasi_alkes/TataCaraKlasifikasi1.pdf

### LICENSE & USAGE POLICY

- We don't charge of the API use. We also don't give hard limits to the volume usage.
- Use the API fairly and let others know by putting this repository link in your project.
- We don't permit any commercial usage.
- Additionally, we also grateful if you could [fill this form](https://forms.gle/dmdaBAvdkixsc4R79) to understand typical usage of the API.

We'll try our best to keep this server up as our gift to the community, so please be nice to us. :)

For any technical difficulties please write an issue or reach out at engineering[at]trustmedis.com

### CREDENTIALS

<details>
<summary>Click here</summary>
<pre>
HOST            : https://public-api.trustmedis.id <br>
Typesense Key   : sBs7trzmQ07tWNzqmhnJpotvFHgsw7Df
</pre>
</details>
