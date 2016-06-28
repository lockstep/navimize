module AuthenticationSpecHelper
  def sign_in_as(user)
    payload = UserSerializer.new(user).as_json
    token = AuthToken.issue(payload)

    headers = {
      'Authorization' => "Bearer #{token}"
    }

    yield headers if block_given?
  end
end
