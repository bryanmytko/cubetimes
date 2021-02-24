FactoryBot.define do
  factory :jnet_file, class: OpenStruct do
    file {
      ActionDispatch::Http::UploadedFile.new(
        tempfile: File.new(
          "#{Rails.root}/spec/fixtures/files/jnet_example.txt"
        ),
        filename: "jnet_example.txt",
        type: "text/plain"
      )
    }
  end

  factory :image_file, class: OpenStruct do
    file {
      ActionDispatch::Http::UploadedFile.new(
        tempfile: File.new(
          "#{Rails.root}/spec/fixtures/files/jnet_example.png"
        ),
        filename: "jnet_example.png",
        type: "image/png"
      )
    }
  end
end
