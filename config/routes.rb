Cubetimes::Application.routes.draw do
  devise_for :users

  root 'timer#index'

  resources :timer,           only: [:index, :create]
  resources :statistics,      only: [:index, :destroy]
  resources :profile,         only: [:index]
  resources :cubing_sessions, only: [:create]

  post "jnet_import", to: "cubing_sessions#jnet_import"
end
