Pod::Spec.new do |s|
  s.name             = 'APIVerveXMLtoJSON'
  s.version          = '1.2.3'
  s.summary          = 'XML to JSON is an XML to JSON converter API that turns raw XML strings into structured JSON objects.'
  s.description      = <<-'DESC'
XML to JSON is an XML to JSON converter API that turns raw XML strings into structured JSON objects. Send any valid XML payload to receive an organized JSON tree preserving tags, attributes, and child elements.

This iOS/macOS SDK provides a convenient way to access the XML to JSON from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/xmltojson?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/xmltojson-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveXMLtoJSON/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
