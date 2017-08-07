ENV["RAILS_ENV"] ||= 'test'

require 'spec_helper'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'

# include ActionDispatch::TestProcess
# include Rack::Test::Methods

Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

ActiveRecord::Migration.check_pending! if defined?(ActiveRecord::Migration)

RSpec.configure do |config|
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.include ModelHelpers::ObjectHelpers, type: :model
  config.include ValidUserRequestHelper, type: :request

  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!

  Capybara.javascript_driver = :selenium
end
