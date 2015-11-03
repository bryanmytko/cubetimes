class StatisticsController < ApplicationController
  include Parser

  before_filter :authenticate_user!

  def index
    @cubing_sessions = CubingSession.where(user_id: current_user.id)
  end

  def destroy
    cubing_session = CubingSession.find(params[:id])
    cubing_session.destroy

    redirect_to statistics_path
  end
end
