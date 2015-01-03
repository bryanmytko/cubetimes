FactoryGirl.define do
  factory :cubing_session do
    user_id 1
    times %W(1 2 3 4 5 6 7 8 9 10 11 12)
    origin "JNetCube"
    puzzle_type "3x3"
  end
end
