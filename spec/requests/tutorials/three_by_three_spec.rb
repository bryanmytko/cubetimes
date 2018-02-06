require "rails_helper"

describe "Tutorials 3x3", type: :request do
  describe "GET tutorials/3x3" do
    it "has a 200 status code" do
      get "/tutorials/3x3"
      expect(response.status).to eq(200)
    end
  end
end
