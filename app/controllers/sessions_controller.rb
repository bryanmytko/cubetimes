class SessionsController < ApplicationController
  def create
    uploaded_io = params[:session][:session_file]
    whitelist = %w(text/plain)
    if whitelist.include? params[:session][:session_file].content_type
      File.open(Rails.root.join('public', 'times', uploaded_io.original_filename), 'wb') do |file|
        file.write(uploaded_io.read)
        flash[:alert] = "Thank you, your session has been uploaded!"
        redirect_to root_path
      end
    else
      flash[:notice] = "Sorry, you can only upload text files!"
      redirect_to root_url
    end
  end
end
