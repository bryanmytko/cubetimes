class CubingSession < ActiveRecord::Base
  belongs_to :user
  has_many :solves, dependent: :destroy, class_name: "Solve"

  def import_solves(file)
    solves = parse_solves(file)

    solves.each do |solve|
      Solve.create(
        time: solve[:time],
        scramble: solve[:scramble],
        cubing_session: self
      )
    end
  end

  private

  def parse_solves(file)
    session_parser = SessionParser.new(file)
    session_parser.solves
  end
end
