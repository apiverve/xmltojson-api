# XML to JSON API - PHP Package

XML to JSON is an XML to JSON converter API that turns raw XML strings into structured JSON objects. Send any valid XML payload to receive an organized JSON tree preserving tags, attributes, and child elements.

## Installation

Install via Composer:

```bash
composer require apiverve/xmltojson
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Xmltojson\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['xml' => '<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don\'t forget me this weekend!</body>
</note>']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Xmltojson\Client;
use APIVerve\Xmltojson\Exceptions\APIException;
use APIVerve\Xmltojson\Exceptions\ValidationException;

try {
    $response = $client->execute(['xml' => '<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don\'t forget me this weekend!</body>
</note>']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "note": {
      "children": [
        {
          "to": {
            "content": "Tove"
          }
        },
        {
          "from": {
            "content": "Jani"
          }
        },
        {
          "heading": {
            "content": "Reminder"
          }
        },
        {
          "body": {
            "content": "Don't forget me this weekend!"
          }
        }
      ]
    }
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/xmltojson?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/xmltojson?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/xmltojson?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
