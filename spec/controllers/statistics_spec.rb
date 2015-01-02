require "rails_helper"

describe StatisticsController, type: :controller do
  describe "GET #index" do
    before do
      @user = FactoryGirl.create(:user)
      10.times { FactoryGirl.create(:cubing_session) }
    end

    it "shows a user's cubing sessions" do
      expect(@user.cubing_session).to_not be_nil
    end
  end
end
