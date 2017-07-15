class CubingSession < ActiveRecord::Base
  include JnetImport

  belongs_to :user
  has_many :solves, dependent: :destroy, class_name: "Solve"

  def self.import(cubing_session, file)
    solves = JnetImport::extract_solves(file)
    solves.each { |solve| JnetImport::SolveCreator.new(solve, cubing_session) }
  end
end
