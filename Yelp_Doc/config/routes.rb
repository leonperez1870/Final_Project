Rails.application.routes.draw do
  root 'doctor#index'
  resources :doctor, only: [:show]
end