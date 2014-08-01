require 'rails_helper'

describe User do
  let(:user) { FactoryGirl.create(:user) }
  specify { expect(user).to be_valid }

  it 'should have a user name' do
    user.user_name = ''
    expect(user).to_not be_valid
  end

  it 'should have an email' do
    user.email = ''
    expect(user).to_not be_valid
  end

  it 'should have a password' do
    user.password = ''
    expect(user).to_not be_valid
  end

  it 'should not save the password as plain text' do
    expect(user.password_hash).not_to eq user.password
  end

  describe 'when email is already taken' do
    it 'should not allow duplicate emails' do
      duplicate_user = user.dup
      expect(duplicate_user).to_not be_valid
    end
  end
end
