Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :posts do 
    resources :reviews
    end
end
