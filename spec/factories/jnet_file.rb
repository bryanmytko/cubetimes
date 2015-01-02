FactoryGirl.define do
  factory :jnet_file, class: OpenStruct do
    file ActionDispatch::Http::UploadedFile.new(
      tempfile: File.new("#{Rails.root}/spec/fixtures/files/jnet_example.txt"),
      filename: "jnet_example.txt"
    )
  end
end
