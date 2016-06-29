class Api::V1::AuthenticationController < Api::V1::BaseController
  def authenticate
    user = User.find_for_database_authentication(authenticatable_params.except(:password))

    if user && user.valid_password?(params[:user][:password])
      render json: payload(user)
    else
      render_login_error
    end
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
