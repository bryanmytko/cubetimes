class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_name, unique: true
      t.string :email, :unique => true
      t.string :password_hash
      t.string :password_salt

      t.timestamps
    end
  end
end
