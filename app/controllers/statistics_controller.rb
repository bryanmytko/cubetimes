class StatisticsController < ApplicationController
  before_action :authenticate_user!

  def index
    @cubing_sessions = CubingSession
      .where(user_id: current_user.id)
      .includes(:solves)
  end

  def destroy
    cubing_session = CubingSession.find(params[:id])
    cubing_session.destroy

    redirect_to statistics_path
  end
end
