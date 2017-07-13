class CubingSession < ActiveRecord::Base
  include JnetImport

  belongs_to :user
  has_many :solves, dependent: :destroy, class_name: "Solve"

  def self.import(cubing_session, file)
    times = JnetImport::extract_times(file)
    scrambles = JnetImport::extract_scrambles(file)

    times
      .zip(scrambles)
      .each do |solve|
        Solve.create(
          time: solve[0],
          scramble: solve[1],
          cubing_session: cubing_session
        )
      end
  end
end
