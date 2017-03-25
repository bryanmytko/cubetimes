class CreateSolves < ActiveRecord::Migration[5.0]
  def change
    create_table :solves do |t|
      t.string :time
      t.string :scramble
      t.references :cubing_session, foreign_key: true

      t.timestamps
    end
  end
end
