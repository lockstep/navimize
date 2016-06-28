class Api::V1::AuthenticationsController < Api::V1::BaseController
  before_action :authenticate_request!, only: [:user]
  def authenticate
    user = User.find_for_database_authentication(authenticatable_params.except(:password))

    if user && user.valid_password?(params[:user][:password])
      render json: payload(user)
    else
      render_login_error
    end
  end

  def user
    render json: current_user, serializer: UserSerializer
  end

  private

  def payload(user)
    data = UserSerializer.new(user).as_json
    {
      token: AuthToken.issue(data),
      user: data
    }
  end

  def authenticatable_params
    params.require(:user).permit(
      :username, :email
    )
  end
end
