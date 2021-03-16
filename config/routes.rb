Rails.application.routes.draw do
  resources :comments
  resources :stories
  # resources :users

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  patch 'users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'

  resources :photos

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
