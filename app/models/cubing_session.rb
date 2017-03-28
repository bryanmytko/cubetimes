class CubingSession < ActiveRecord::Base
  include JnetImport

  belongs_to :user
  has_many :solves, dependent: :destroy, class_name: "Solve"

  def self.jnet_import(user, params)
    cubing_session = create(
      user: user,
      puzzle_type: "3x3",
      created_at: JnetImport::extract_date(params)
    )

    times = JnetImport::extract_times(params)
    scrambles = JnetImport::extract_scrambles(params)

    times
      .zip(scrambles)
      .each do |solve|
        Solve.create(
          time: solve[0],
          scramble: solve[1],
          cubing_session: cubing_session
        )
      end

    return cubing_session
  end
end
