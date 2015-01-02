require "rails_helper"

RSpec.describe JnetImport, type: :model do
  let(:file_factory) { FactoryGirl.create(:jnet_file) }

  describe "extracting times from uploaded file" do
    it "should parse twelve times from a Jnet upload" do
      expect(JnetImport::extract_times(file_factory.file).size).to eq(12)
    end
  end
end
