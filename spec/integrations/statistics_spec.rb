require "rails_helper"

describe "Statistics page", type: :request do
  context "When a user is logged in" do
    describe "GET statistics" do
      it "has a 200 status code" do
        sign_in_as_a_valid_user

        get "/statistics"
        expect(response.status).to eq(200)
      end
    end
  end

  context "When a user is not logged in" do
    describe "GET statistics" do
      it "has a 302 status code" do
        get "/statistics"
        expect(response.status).to eq(302)
      end
    end
  end

  context "When a user uploads a Jnet cube session" do
    let(:file) do
      fixture_file_upload("spec/fixtures/files/jnet_example.txt", "text/plain")
    end

    describe "POST cubingsession" do
      it "displays the correct flash alert" do
        post "/cubing_sessions",
          params: { cubing_session: { session_file: file } }
        expect(flash[:alert]).to match(/Thank you.*/)
      end
    end
  end

  context "When a user uploads an incorrect file type" do
    let(:file) do
      fixture_file_upload("spec/fixtures/files/jnet_example.png", "image/png")
    end

    describe "POST cubingsession" do
      it "displays the correct flash alert" do
        post "/cubing_sessions",
          params: { cubing_session: { session_file: file } }
        expect(flash[:notice]).to match(/Sorry.*/)
      end
    end
  end
end
