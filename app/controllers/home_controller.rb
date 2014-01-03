class HomeController < ApplicationController
  include ParserConcern
  
  def index
    @timesArray ||= Array.new
    @session = Session.new  
    times_path = File.join Rails.root, 'public', 'times'
    if File.directory?(times_path)
      @timesArray = parse_dir times_path
    end
    if !@timesArray.any?
      @best_time = '--'
      @best_average = '--'
    end
    @best_time = @@best_time
    @best_average = @@best_average  
  end
  
end