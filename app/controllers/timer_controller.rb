class TimerController < ApplicationController
  SESSION_SIZE = 12.freeze

  def index
  end

  def create
    CubingSession.create(
      user_id: current_user.id,
      origin: "web",
      times: params[:times],
      puzzle_type: params[:puzzle_type]
    )

    head :ok, content_type: "text/html"
  end
end
