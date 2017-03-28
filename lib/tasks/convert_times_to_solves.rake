namespace :convert_times_to_solves do
  desc "convert times to solves"
  task :run => :environment do
    CubingSession.all.each do |cubing_session|
      if cubing_session.solves.empty?
        cubing_session.times.each do |time|
          Solve.create(
            cubing_session: cubing_session,
            time: time
          )
        end
      end
    end
  end
end
