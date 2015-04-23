Rails.application.routes.draw do
  root 'doctor#index'
  resources :doctor, only: [:show]
  get '/search' => 'doctor#search'
  #post '/search' => 'doctor#search'
end
