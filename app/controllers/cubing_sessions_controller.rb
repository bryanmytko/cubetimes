class CubingSessionsController < ApplicationController
  def create
  end

  def jnet_import
    if params[:cubing_session] && upload_valid?
      import_jnet_data
    else
      upload_error "Sorry, you can only upload text files!"
    end
  end

  private

  def import_jnet_data
    if cubing_session.errors.blank?
      upload_success
    else
      upload_error "Sorry, that data could not be uploaded!"
    end
  end

  def upload_valid?
    whitelist.include? session_file.content_type
  end

  def whitelist
    %w(text/plain)
  end

  def current_user_cubing_session
    current_user.cubing_session
  end

  def session_file
    params[:cubing_session][:session_file]
  end

  def cubing_session
    current_user_cubing_session.jnet_import(current_user, session_file)
  end

  def upload_success
    flash[:alert] = "Thank you, your session has been uploaded!"
    redirect_to statistics_path
  end

  def upload_error(msg)
    flash[:notice] = msg
    redirect_to statistics_path
  end
end
