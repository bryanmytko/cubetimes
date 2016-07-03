require "rails_helper"

RSpec.describe CubingSession, :type => :model do
  describe "a valid cubing session" do
    let(:cubing_session) { FactoryGirl.create(:cubing_session) }

    it "has a valid factory" do
      expect(cubing_session).to be_valid
    end

    it "initializes a cubing session" do
      expect(cubing_session).to_not be_nil
    end

    it "should have an origin" do
      expect(cubing_session.origin).to eq("JNetCube")
    end

    it "should have a puzzle type" do
      expect(cubing_session.puzzle_type).to eq("3x3")
    end

    it "should have 12 times" do
      bad_session = CubingSession.new(times: [1,2,3])
      expect(bad_session.errors).to_not be_nil
    end
  end

  describe "a jnet imported session" do
    let(:user) { FactoryGirl.create(:user) }

    before(:each) do
      allow(described_class).to receive(:current_user) { user }
      @file_factory = FactoryGirl.create(:jnet_file)
      @cubing_session = CubingSession.jnet_import(user, @file_factory.file)
    end

    it "should create a cubing session from jnet data" do
      expect(@cubing_session).to_not be_nil
    end

    it "should contain 12 times" do
      expect(@cubing_session.times.size).to eq(12)
    end

    it "should use sesssion's date, not today's" do
      date = "Wed Feb 05 19:30:14 EST 2014"
      expect(@cubing_session.created_at.utc)
        .to eq(date.to_time.utc)
    end
  end
end
