class AddCubeTypeToCubingSession < ActiveRecord::Migration
  def change
    add_column :cubing_sessions, :puzzle_type, :string
  end
end
