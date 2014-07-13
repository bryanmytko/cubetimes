require 'rails_helper'

describe User do
  password_string = 'password123'
  user = User.create(:password_hash => password_string, :user_name => 'bryan', :email => 'bryanmytko@gmail.com')
  it 'should have a user name' do
    expect(user.user_name).to eq 'bryan'
  end
  it 'should have an email' do
    expect(user.email).to eq 'bryanmytko@gmail.com'
  end
  it 'should not save the password as plain text' do
    expect(user.password_hash).not_to eq password_string
  end
end
