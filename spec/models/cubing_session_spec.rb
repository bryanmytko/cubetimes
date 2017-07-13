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
    let(:cubing_session) { FactoryGirl.create(:cubing_session) }

    context "specs with valid data" do
      before(:each) do
        # @TODO check
        allow(described_class).to receive(:current_user) { user }
        @file_factory = FactoryGirl.create(:jnet_file)
        CubingSession.import(cubing_session, @file_factory.file)
      end

      it "should create a cubing session from jnet data" do
        expect(cubing_session.solves).to_not be_nil
      end

      it "should contain 12 times" do
        expect(cubing_session.solves.size).to eq(12)
      end
    end
  end
end
