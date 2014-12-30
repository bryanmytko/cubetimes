class StatisticsController < ApplicationController
  include ParserConcern

  before_filter :authenticate_user!

  def index
    # OOF. Refactor!
    # @timesArray ||= Array.new
    # times_path = File.join Rails.root, 'public', 'times'

    # if File.directory?(times_path)
    #   @timesArray = parse_dir times_path
    # end
    # if !@timesArray.any?
    #   @best_time = '--'
    #   @best_average = '--'
    # end
    # @best_time = @@best_time
    # @best_average = @@best_average
  end
end
