require "rails_helper"

RSpec.describe CubingSession, :type => :model do
  describe "factory" do
    let(:cubing_session) { FactoryGirl.create(:cubing_session) }

    it "has a valid factory" do
      expect(cubing_session).to be_valid
    end
  end

  describe ".import_solves" do
    let(:user) { FactoryGirl.create(:user) }
    let(:cubing_session) { FactoryGirl.create(:cubing_session) }
    let(:file_factory) { FactoryGirl.create(:jnet_file) }

    it "should import solve date for the session" do
      cubing_session.import_solves(file_factory.file)

      expect(cubing_session.solves).to_not be_nil
      expect(cubing_session.solves.size).to eq(12)
    end
  end
end
