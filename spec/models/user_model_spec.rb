require 'rails_helper'

describe User do
  password_string = 'password123'
  it 'should have a user name' do
    user = User.create(:user_name => 'bryan')
    expect(user.user_name).to eq 'bryan'
  end
  it 'should have an email' do
    user = User.create(:email => 'bryanmytko@gmail.com')
    expect(user.email).to eq 'bryanmytko@gmail.com'
  end
  it 'should not save the password as plain text' do
    user = User.create(:password_hash => password_string)
    expect(user.password_hash).not_to eq password_string
  end
end
