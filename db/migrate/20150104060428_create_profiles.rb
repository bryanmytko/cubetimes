class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.integer :age
      t.string :country
      t.string :favorite_puzzles
      t.string :fastest_3x3

      t.timestamps
    end
  end
end
