require 'rails_helper'

describe SessionsController, type: :controller do
  let(:user) { FactoryGirl.create(:user) }
  describe "POST #create" do
    context "user is valid" do
      it "should authenticate user" do
        expect(User.authenticate(user)).to eq(user)
      end
    end
    context "user is invalid" do
      it "should not authenticate user" do
        user.password = ''
        expect(User.authenticate(user)).to eq nil
      end
    end
  end
end
