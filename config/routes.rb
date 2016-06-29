Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      post "login" => 'authentication#authenticate'
    end
  end
end
