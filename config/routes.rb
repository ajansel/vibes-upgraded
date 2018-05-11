Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  mount ActionCable.server => '/cable'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update]
    resource :sessions, only: [:create, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:index, :show]
    resources :posts, only: [:index, :show, :create, :update, :destroy] do
      get "profile_index", on: :collection
    end
    resources :likes, only: [:destroy, :create]
    resources :followers, only: [:destroy, :create]
    resources :music_searches, only: [:index] do
      get "songs_by_artist", on: :collection
      get "songs_by_album", on: :collection
      get "random_album", on: :collection
    end
  end
end
