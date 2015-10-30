class CubingSession < ActiveRecord::Base
  include JnetImport

  belongs_to :user

  validates :times, length: { is: 12 }

  def self.jnet_import(params)
    CubingSession.create(
      user_id: current_user.id,
      times: JnetImport::extract_times(params),
      puzzle_type: "3x3"
    )
  end
end
