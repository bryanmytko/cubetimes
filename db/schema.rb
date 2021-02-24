# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2017_03_25_211826) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cubing_sessions", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.text "times", default: [], array: true
    t.string "origin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "puzzle_type"
  end

  create_table "profiles", id: :serial, force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.integer "age"
    t.string "country"
    t.string "favorite_puzzles"
    t.string "fastest_3x3"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "solves", id: :serial, force: :cascade do |t|
    t.string "time"
    t.string "scramble"
    t.integer "cubing_session_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cubing_session_id"], name: "index_solves_on_cubing_session_id"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "solves", "cubing_sessions"
end
