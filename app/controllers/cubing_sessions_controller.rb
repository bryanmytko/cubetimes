class CubingSessionsController < ApplicationController
  rescue_from SessionParser::FileTypeError, with: :invalid_file_uploaded

  def create
    cubing_session = CubingSession.new(
      user: current_user,
      puzzle_type: "3x3"
    )

    cubing_session.import_solves(file)
    cubing_session.save

    flash[:alert] = "Thank you, your session has been imported!"
    redirect_to statistics_path
  end

  private

  def file
    params[:cubing_session][:session_file]
  end

  def invalid_file_uploaded
    flash[:notice] = "Sorry, something went wrong."
    redirect_to statistics_path
  end
end
