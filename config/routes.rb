Rails.application.routes.draw do
  root 'doctor#index'
  get '/search', to: 'doctor#search'
  # post '/search', to: 'doctor#search'
  # get '/@results', to: 'doctor#search'
end
