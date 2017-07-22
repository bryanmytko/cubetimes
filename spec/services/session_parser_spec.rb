require "rails_helper"

RSpec.describe SessionParser, type: :model do
  let(:jnet_file_factory) { FactoryGirl.create(:jnet_file) }
  let(:image_file_factory) { FactoryGirl.create(:image_file) }

  describe "parsing solves" do
    it "parses all solves" do
      parser = SessionParser.new(jnet_file_factory.file)
      expect(parser.solves.length).to eq(12)
    end

    it "validates file format" do
      expect{SessionParser.new(image_file_factory.file)}
        .to raise_error(SessionParser::FileTypeError)
    end
  end

  describe "parsing date" do
    it "return the date of the session" do
      parser = SessionParser.new(jnet_file_factory.file)
      expect(parser.date)
        .to eq("Wed Feb 05 19:30:14 EST 2014")
    end
  end
end
