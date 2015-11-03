module StatisticsHelper
  def display_row(cubing_session)
    string =  "<td>#{date_format(cubing_session.created_at)}</td>"
    string += "<td class=\"average\">" \
      "#{session_average(cubing_session.times)}</td>"

    cubing_session.times.each do |time|
      if time == cubing_session.times.min
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
    lowest_times = Array.new
    cubing_sessions.each do |cubing_session|
      lowest_times << cubing_session.times.min
    end
    lowest_times.min
  end

  def best_average(cubing_sessions)
    lowest_average = Array.new
    cubing_sessions.each do |cubing_session|
      lowest_average << session_average(cubing_session.times)
    end
    lowest_average.min
  end

  private

  def session_average(times)
    (times.map(&:to_f).reduce(:+).to_f / times.size).round(2)
  end

  def date_format(date)
    date.strftime("%m\/%d\/%Y")
  end
end
