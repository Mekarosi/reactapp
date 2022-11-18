Rails.application.routes.draw do
  root 'pages#home' 
  get '*path', to: 'pages#home', via: :all 
end
