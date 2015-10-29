require "rails_helper"

describe User do
  it "is invalid without an email" do
    invalid_user = FactoryGirl.build(:user, email: nil)
    expect(invalid_user).to_not be_valid
  end

  it "is invalid without a password" do
    invalid_user = FactoryGirl.build(:user, email: nil)
    expect(invalid_user).to_not be_valid
  end

  context "when email is already taken" do
    it "is invalid" do
      valid_user = FactoryGirl.create(:user, email: Faker::Internet.email)
      invalid_user = FactoryGirl.build(:user, email: valid_user.email)

      expect(invalid_user).to_not be_valid
    end
  end
end
