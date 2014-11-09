Cubetimes::Application.routes.draw do
  devise_for :users

  root 'timer#index'

  resources :timer, only: [:index]
  resources :statistics, only: [:index]
  resources :profile, only: [:index]
  resources :sessions, only: [:index]
end
