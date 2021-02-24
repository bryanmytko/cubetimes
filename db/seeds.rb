user = User.create(
  email:    "bryanmytko@gmail.com",
  password: "testing1"
)

FactoryBot.create(:profile, user_id: user.id)

4.times do
  FactoryBot.create(:cubing_session, user_id: user.id)
end
