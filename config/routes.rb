Rails.application.routes.draw do
  
  #resources :weaponstatus,format: 'json'
  get 'achievement/index'
  get 'connection/index'
  root 'top#index'
  
end
