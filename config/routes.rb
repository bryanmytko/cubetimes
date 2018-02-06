Cubetimes::Application.routes.draw do
  devise_for :users

  root "timer#index"

  resources :cubing_sessions, only: [:create]
  resources :profile,         only: [:index]
  resources :statistics,      only: [:index, :destroy]
  resources :timer,           only: [:index, :create]
  namespace :tutorials do
    resources :three_by_three, path: "3x3", only: [:index]
  end
end
