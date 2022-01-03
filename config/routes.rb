Rails.application.routes.draw do
  
  resources :branded_items
  resources :watch_lists
  resources :items
  resources :users
  resources :brands
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
