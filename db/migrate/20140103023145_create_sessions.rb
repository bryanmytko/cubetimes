class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :file

      t.timestamps
    end
  end
end
