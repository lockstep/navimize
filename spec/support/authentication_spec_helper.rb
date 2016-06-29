module AuthenticationSpecHelper
  def sign_in_as(user)
    sign_in user

    # Issue JWT token for the given user
    payload = UserSerializer.new(user).as_json
    token = AuthToken.issue(payload)
    header_string = "Bearer #{token}"

    # Set request Authorization header
    request.headers['Authorization'] = header_string

    # Set @current_user instance variable
    request.env['action_controller.instance'].instance_variable_set('@current_user', user)

    yield token if block_given?
  end

  # def sign_out_as(user)
  #   sign_out user

  #   # Clear request Authorization header
  #   request.headers['Authorization'] = nil

  #   # Clear controller's instance variable
  #   request.env['action_controller.instance'].instance_variable_set('@current_user', nil)
  # end
end
