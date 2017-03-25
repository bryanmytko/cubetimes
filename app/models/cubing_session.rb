class CubingSession < ActiveRecord::Base
  include JnetImport

  belongs_to :user
  has_many :solves

  validates :times, length: { is: 12 }

  def self.jnet_import(user, params)
    create(
      user: user,
      times: JnetImport::extract_times(params),
      puzzle_type: "3x3",
      created_at: JnetImport::extract_date(params)
    )
  end
end
