class Profile < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :gender, inclusion: { in: %w(male female unspecified) }
  validates :age, numericality: { only_integer: true }
  validates :country, presence: true
end
