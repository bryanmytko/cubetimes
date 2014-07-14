require 'rails_helper'

describe SessionsController do
  describe "POST create" do
    context "user is valid" do
      it "should authenticate user" do
        user = User.create(:email => 'user@website.com', :password => 'password123', :password_salt => 'apple')
        auth_user = User.authenticate(user.email, 'password123')
        expect(auth_user.id).to eq user.id
      end
    end
    context "user is invalid" do
      it "should not authenticate user" do
        user = User.create(:email => 'user@website.com', :password => 'password123', :password_salt => 'apple')
        auth_user = User.authenticate(user.email, 'bogus_password')
        expect(auth_user).to eq nil
      end
    end
  end
end
