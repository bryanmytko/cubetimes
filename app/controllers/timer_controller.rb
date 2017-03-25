class TimerController < ApplicationController
  SESSION_SIZE = 12.freeze

  def index
  end

  def create
    if current_user
      cubing_session = CubingSession.create(
        user_id: current_user.id,
        origin: "web",
        puzzle_type: params[:puzzle_type]
      )

      session_data_params[:session_array].each_pair do |index, value|
        Solve.create(
          time: value[:time],
          scramble: value[:scramble],
          cubing_session: cubing_session
        )
      end
    end

    head :ok, content_type: "text/html"
  end

  private

  def session_data_params
    params.require(:session_data).permit(session_array: [:time, :scramble])
  end
end
