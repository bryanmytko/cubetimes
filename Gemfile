
source 'https://rubygems.org'

ruby '2.0.0'

gem 'rails', '4.1.4'

gem 'pg'

# Auth
gem 'devise'
gem 'httparty'

# Required for seeding the database
gem 'factory_girl_rails'
gem 'faker'

# Front end
gem 'jquery-rails'
gem 'sass'
gem 'bootstrap-sass', '~> 3.2.0'
gem 'sass-rails', '~> 4.0.2' #, github: 'rails/sass-rails'
gem 'font-awesome-rails'
gem 'uglifier'
gem 'turbolinks'

group :production do
  gem 'heroku-deflater'
  gem 'rails_12factor'
end

group :development do
  gem 'spring'
end

group :development, :test do
  gem 'rspec-rails'
  gem 'rspec-collection_matchers'
end

group :development, :test, :integration, :staging do
  gem 'byebug'
end

group :test do
  gem 'webmock'
  gem 'spork', '> 0.9.0.rc'
  gem 'guard-spork'
end
