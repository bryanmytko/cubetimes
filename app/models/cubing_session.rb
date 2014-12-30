class CubingSession < ActiveRecord::Base
  validates :times, length: { is: 12 }
end
