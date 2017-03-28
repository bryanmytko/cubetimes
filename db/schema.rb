# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170325211826) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cubing_sessions", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "times",       default: [], array: true
    t.string   "origin"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "puzzle_type"
  end

  create_table "profiles", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "gender"
    t.integer  "age"
    t.string   "country"
    t.string   "favorite_puzzles"
    t.string   "fastest_3x3"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.index ["user_id"], name: "index_profiles_on_user_id", using: :btree
  end

  create_table "solves", force: :cascade do |t|
    t.string   "time"
    t.string   "scramble"
    t.integer  "cubing_session_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["cubing_session_id"], name: "index_solves_on_cubing_session_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "solves", "cubing_sessions"
end
