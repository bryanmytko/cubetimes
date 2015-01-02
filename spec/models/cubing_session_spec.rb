require "rails_helper"

RSpec.describe CubingSession, :type => :model do
  describe "a valid cubing session" do
    let(:cubing_session) { FactoryGirl.create(:cubing_session) }

    it "initializes a cubing session" do
      expect(cubing_session).to_not be_nil
    end

    it "should have an origin" do
      expect(cubing_session.origin).to eq("JNetCube")
    end

    it "should have 12 times" do
      bad_session = CubingSession.new(times: [1,2,3])
      expect(bad_session.errors).to_not be_nil
    end
  end

  describe "a jnet imported session" do

    before(:all) do
      @file_factory = FactoryGirl.create(:jnet_file)
      @cubing_session = CubingSession.jnet_import(@file_factory.file)
    end

    it "should create a cubing session from jnet data" do
      expect(@cubing_session).to_not be_nil
    end

    it "should contain 12 times" do
      expect(@cubing_session.times.size).to eq(12)
    end

    it "should contain 12 times" do
      expect(@cubing_session.times.size).to eq(12)
    end
  end
end
