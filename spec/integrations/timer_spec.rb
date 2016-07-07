require "rails_helper"

describe "Timer page", type: :request do
  describe "#index" do
    it "has a 200 status code" do
      sign_in_as_a_valid_user

      get "/"
      expect(response.status).to eq(200)
    end
  end
end
