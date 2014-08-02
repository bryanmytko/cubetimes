FactoryGirl.define do
  factory :user do
    user_name Faker::Name.first_name
    password Faker::Internet.password(8)
    password_salt Faker::Lorem.word
    email Faker::Internet.email
  end
end
