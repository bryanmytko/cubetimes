class CubingSessionsController < ApplicationController
  # before_action :validate_file_format, only: [:create]

  def create
    if valid_file_format?
      cubing_session = CubingSession.create(
        user: current_user,
        puzzle_type: "3x3",
        created_at: JnetImport::extract_date(session_file)
      )

      CubingSession.import(cubing_session, session_file)
      flash[:alert] = "Thank you, your session has been uploaded!"
    else
      flash[:notice] = "Sorry, that file could not be uploaded"
    end

    redirect_to statistics_path
  end

  private

  def whitelist
    %w(text/plain)
  end

  def session_file
    params[:cubing_session][:session_file]
  end

  def valid_file_format?
    whitelist.include? session_file.content_type
  end
end
