class CubingSessionsController < ApplicationController
  def create
    if upload_valid?
      upload_success
    else
      upload_error
    end
  end

  private

  def upload_valid?
    whitelist.include? params[:cubing_session][:session_file].content_type
  end

  def whitelist
    %w(text/plain)
  end

  def upload_success
    # File.open(Rails.root.join('public', 'times', uploaded_io.original_filename), 'wb') do |file|
    # file.write(uploaded_io.read)
    flash[:alert] = "Thank you, your session has been uploaded!"
    redirect_to root_path
  end

  def upload_error
    flash[:notice] = "Sorry, you can only upload text files!"
    redirect_to root_url
  end
end
