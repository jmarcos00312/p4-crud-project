Rails.application.routes.draw do
  namespace :api do 

    resources :items
    resources :users, only: %i[destroy index show]
    resources :brands, only: %i[index show]
    
    post '/login', to: 'session#create'
    delete '/logout', to: 'session#destroy'
    post '/signup', to: 'users#create'
    get '/me', to: 'users#me'
    patch '/items/:id/sold', to: 'items#sold'
    get '/purchased_items', to: 'items#purchased_items'
    
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
    get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
