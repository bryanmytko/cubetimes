require 'rails_helper'

RSpec.describe Profile, type: :model do
  it "has a valid factory" do
    valid_profile = FactoryBot.create(:profile)
    expect(valid_profile).to be_valid
  end

  it "is invalid without a first name" do
    invalid_profile = FactoryBot.build(:profile, first_name: nil)
    expect(invalid_profile).to_not be_valid
  end

  it "is invalid without a last name" do
    invalid_profile = FactoryBot.build(:profile, last_name: nil)
    expect(invalid_profile).to_not be_valid
  end

  it "is invalid without a country" do
    invalid_profile = FactoryBot.build(:profile, country: nil)
    expect(invalid_profile).to_not be_valid
  end

  it "is invalid without an integer age" do
    invalid_profile = FactoryBot.build(:profile, age: 1.2)
    expect(invalid_profile).to_not be_valid
  end

  it "is invalid without an acceptable gender" do
    invalid_profile = FactoryBot.build(:profile, gender: "foo")
    expect(invalid_profile).to_not be_valid
  end
end
