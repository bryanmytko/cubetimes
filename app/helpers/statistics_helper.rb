module StatisticsHelper
  def display_row(cubing_session)
    string =  "<td>#{date_format(cubing_session.created_at)}</td>"
    string += "<td class=\"average\">" \
      "#{session_average(cubing_session.times)}</td>"

    times = cubing_session.solves.pluck(:time).collect(&:to_i)
    times.each do |time|
      if(time == times.min)
        string += "<td class=\"best\">#{time}</td>"
      else
        string += "<td>#{time}</td>"
      end
    end

    string += destroy_row(cubing_session.id)
    raw string
  end

  def destroy_row(id)
    string = "<td>"
    string += link_to "[x]",
      statistic_path(id),
      method: :delete,
      data: { confirm: "Really delete this session?" }
    string += "</td>"
  end

  def best_time(cubing_sessions)
    cubing_sessions
      .includes(:solves)
      .pluck(:time)
      .map(&:to_f)
      .min
  end

  def best_average(cubing_sessions)
    debugger
    avgs = cubing_sessions
      .includes(:solves)
      .map { |session| session_average(session.solves.pluck(:time)) }
      .min
  end

  private

  def session_average(times)
    (times.map(&:to_f).reduce(:+).to_f / times.size).round(2)
  end

  def date_format(date)
    date.strftime("%m\/%d\/%Y")
  end
end
