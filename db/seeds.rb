user = User.create(
  email:    "bryanmytko@gmail.com",
  password: "testing1"
)

FactoryGirl.create(:profile, user_id: user.id)

4.times do
  FactoryGirl.create(:cubing_session, user_id: user.id)
end
