class StatisticsController < ApplicationController
  include ParserConcern

  before_filter :authenticate_user!

  def index
    @cubing_sessions = CubingSession.where(user_id: current_user.id)
  end
end
