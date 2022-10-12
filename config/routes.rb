Rails.application.routes.draw do
  
  resources :blogs, only: [:index, :create, :update, :destroy]

  resources :users, only: [:index, :show, :create]

  resources :comments, only: [ :index, :update, :create, :destroy]

end
