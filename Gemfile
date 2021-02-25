source "https://rubygems.org"
ruby "~> 3.0"

gem "awesome_print"
gem "bootstrap-sass"
gem "capybara"
gem "devise", "4.7.1"
gem "fastclick-rails"
gem "font-awesome-rails"
gem "httparty"
gem "pg"
gem "puma"
gem "rails"
gem "sass"
gem "sass-rails"
gem "selenium-webdriver"
gem "uglifier"

group :production do
  gem "heroku-deflater"
  gem "rails_12factor"
end

group :development, :test do
  gem "factory_bot_rails"
  gem "faker"
end

group :development, :test, :integration, :staging do
  gem "byebug"
end

group :test do
  gem "rspec-rails"
  gem "rspec-collection_matchers"
end
