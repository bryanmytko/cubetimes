class RemoveTimesFromCubingSession < ActiveRecord::Migration[5.0]
  def change
    remove_column :cubing_sessions, :times
  end
end
