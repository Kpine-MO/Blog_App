Rails.application.routes.draw do
  
  resources :posts, only: [:index, :create, :update, :destroy]

  resources :blogers, only: [:create]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "blogers#create"
  get "/me", to: "blogers#show"

  get "/posts/new", to: "posts#new"

end
