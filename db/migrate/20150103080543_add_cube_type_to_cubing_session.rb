class AddCubeTypeToCubingSession < ActiveRecord::Migration[5.0]
  def change
    add_column :cubing_sessions, :puzzle_type, :string
  end
end
