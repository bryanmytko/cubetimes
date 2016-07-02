require "rails_helper"

RSpec.describe TimerController, type: :controller do
  describe "#index" do
    it "renders :index view" do
      get :index
      expect(response).to render_template(:index)
    end
  end
end
