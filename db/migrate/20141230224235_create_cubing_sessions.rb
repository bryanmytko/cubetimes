class CreateCubingSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :cubing_sessions do |t|
      t.integer :user_id
      t.text :times, array: true, default: []
      t.string :origin

      t.timestamps
    end
  end
end
