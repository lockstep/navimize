Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      post "login" => 'authentications#authenticate'

      resource :authentication, only: [] do
        get :user
      end
    end
  end

  # Templates stub for react
  # Serve static#show for any urls
  stub_paths = ['login']
  stub_paths.each do |route|
    get route => 'static#show', constraints: { path: /.+/ }
  end

  root to: "static#show"
end
