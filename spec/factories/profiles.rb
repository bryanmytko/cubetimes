FactoryGirl.define do
  factory :profile do
    first_name { Faker::Name.first_name }
    last_name  { Faker::Name.last_name }
    gender     { %w(male female).sample }
    age        { Faker::Number.digit }
    country    { Faker::Address.country }
    favorite_puzzles { %w(3x3 4x4 5x5 pyraminx square-1 magic).sample }
    fastest_3x3 { Faker::Commerce.price }
  end
end
