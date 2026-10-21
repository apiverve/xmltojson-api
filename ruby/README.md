# XML to JSON API - Ruby Gem

XML to JSON is an XML to JSON converter API that turns raw XML strings into structured JSON objects. Send any valid XML payload to receive an organized JSON tree preserving tags, attributes, and child elements.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_xmltojson'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_xmltojson
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_xmltojson'

# Initialize the client
client = APIVerve::Xmltojson::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ xml: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ xml: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>" })
  puts response["data"]
rescue APIVerve::Xmltojson::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Xmltojson::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Xmltojson::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/xmltojson?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/xmltojson?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/xmltojson?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
