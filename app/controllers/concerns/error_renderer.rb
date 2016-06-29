module ErrorRenderer
  def render_401(messages = ['Unauthorized'])
    render json: { errors: messages }, status: :unauthorized
  end

  def render_login_error
    render json: { errors: ['Invalid login information'] }, status: :unauthorized
  end
end
