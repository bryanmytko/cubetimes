source "https://rubygems.org"

gem "rails", "5.0.2"
gem "pg"
gem "devise"
gem "httparty"
gem "jquery-rails"
gem 'jquery-ui-rails'
gem "sass"
gem "bootstrap-sass"
gem "sass-rails"
gem "font-awesome-rails"
gem "uglifier"
gem "awesome_print"
gem "fastclick-rails"

group :production do
  gem "heroku-deflater"
  gem "rails_12factor"
end

group :development, :test do
  gem "factory_girl_rails"
  gem "faker"
end

group :development, :test, :integration, :staging do
  gem "byebug"
end

group :test do
  gem "rspec-rails"
  gem "rspec-collection_matchers"
end
