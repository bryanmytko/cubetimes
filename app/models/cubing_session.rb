class CubingSession < ActiveRecord::Base
  include JnetImport

  belongs_to :user

  validates :times, length: { is: 12 }

  def self.jnet_import(params)
    CubingSession.create(
      times: JnetImport::extract_times(params)
    )
  end
end
