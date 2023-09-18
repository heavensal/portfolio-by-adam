Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'pages#home'
  get 'skills', to: 'pages#skills', as: 'skills'
  get 'projects', to: 'pages#projects', as: 'projects'
  get 'training', to: 'pages#training', as: 'training'
  get 'about_me', to: 'pages#about', as: 'about'
end
