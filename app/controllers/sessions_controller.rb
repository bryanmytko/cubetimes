class SessionsController < ApplicationController
  def new
  end
  def create
    email = params[:email]
    password = params[:password]
    user = User.authenticate(user)
    if user
      session[:user_id] = user.id
      flash[:notice] = "You've been logged in successfully."
      redirect_to '/'
    else
      flash[:alert] = "Incorrect Email/Password"
      redirect_to '/login'
    end
  end
  def destroy
    session[:user_id] = nil
    flash[:notice] = "You've been logged out successfully."
    redirect_to '/'
  end
end
