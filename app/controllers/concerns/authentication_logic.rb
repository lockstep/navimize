module AuthenticationLogic
  extend ActiveSupport::Concern

  def current_user
    @current_user
  end

  def authenticate_request!
    unless token_has_user_id?
      # Something is wrong here. Token should include user_id
      render json: { errors: ['Unauthorized'] }, status: :unauthorized
      return false
    end

    @current_user = User.find(auth_token[:id])
  end

  def http_token
    @http_token ||= if request.headers['Authorization'].present?
      request.headers['Authorization'].split(' ').last
    end
  end

  def auth_token
    @auth_token ||= AuthToken.decode(http_token)
  end

  def token_has_user_id?
    http_token && auth_token && auth_token[:id].to_i
  end
end
