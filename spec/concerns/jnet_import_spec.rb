require "rails_helper"

RSpec.describe JnetImport, type: :model do
  let(:jnet_file_factory) { FactoryBot.create(:jnet_file) }
  let(:image_file_factory) { FactoryBot.create(:image_file) }
  let(:user) { FactoryBot.create(:user) }

  describe "extracting solves from uploaded file" do
    it "collect twelve solves" do
      expect(JnetImport::extract_solves(jnet_file_factory.file).size)
        .to eq(12)
    end
  end

  describe "extracting date from uploaded file" do
    it "return the date of the session" do
      expect(JnetImport::extract_date(jnet_file_factory.file))
        .to eq("Wed Feb 05 19:30:14 EST 2014")
    end
  end
end
