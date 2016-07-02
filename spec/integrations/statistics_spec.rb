require "rails_helper"

describe "Statistics page", type: :request do
  context "When a user is logged in" do
    describe "GET index" do
      it "has a 200 status code" do
        sign_in_as_a_valid_user

        get "/statistics"
        expect(response.status).to eq(200)
      end
    end
  end

  context "When a user is not logged in" do
    describe "GET index" do
      it "has a 302 status code" do
        get "/statistics"
        expect(response.status).to eq(302)
      end
    end
  end
end
