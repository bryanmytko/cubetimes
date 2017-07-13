require "rails_helper"

RSpec.describe JnetImport, type: :model do
  let(:jnet_file_factory) { FactoryGirl.create(:jnet_file) }
  let(:image_file_factory) { FactoryGirl.create(:image_file) }
  let(:user) { FactoryGirl.create(:user) }

  describe "extracting times from uploaded file" do
    it "should parse twelve times from a Jnet upload" do
      expect(JnetImport::extract_times(jnet_file_factory.file).size)
        .to eq(12)
    end
  end

  describe "extracting scrambles from uploaded file" do
    it "should parse twelve scrambles from a Jnet upload" do
      expect(JnetImport::extract_scrambles(jnet_file_factory.file).size)
        .to eq(12)
    end
  end
end
