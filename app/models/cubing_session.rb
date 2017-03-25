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

    # Check params here
    debugger
    # session_data_params[:session_array].each_pair do |index, value|
    #   Solve.create(
    #     time: params[:time],
    #     scramble: params[:scramble],
    #     cubing_session: cubing_session
    #   )
    # end
  end
end
