require 'rails_helper'

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
    before(:each) do
      allow(File).to receive(:read).and_return(jnet_object)
    end

    it "should read a JNET object" do
      expect(jnet_object).to_not be_nil
    end

    # @TODO should write some tests for the concern itself soon
    it "should create a cubing session from jnet data" do
      expect(CubingSession.jnet_import(jnet_object))
        .to_not be_nil
    end
  end
end
