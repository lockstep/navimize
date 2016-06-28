module Support
  module Requests
    module JsonHelpers
      def json_response
        @json ||= JSON.parse(response.body)
      end
      def response_code
        @response_code ||= response.code.to_i
      end
    end
  end
end
