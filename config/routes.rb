Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :users
  resources :posts do 
    resources :reviews
    end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
