class BaseApiController < ActionController::API
  include AuthenticationLogic
  include ErrorRenderer
end
