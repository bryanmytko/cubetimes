Cubetimes::Application.routes.draw do
  root 'timer#index'

  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  get 'logout' => 'sessions#destroy'

  resources :timer, :statistics, :profile, :sessions, :home

end
