module StatisticsHelper
  def display_row(cubing_session)
    row =  "<td>#{date_format(cubing_session.created_at)}</td>"
    row += "<td class=\"average\">" \
      "#{session_average(cubing_session)}</td>"

    solves = cubing_session.solves
    times = solves.pluck(:time).collect(&:to_f)

    solves.each do |solve|
      best_found = false
      time = solve.time.to_f
      td = "<td data-scramble=\"#{solve.scramble}\""

      if(time == times.min && best_found == false)
        td += " class=\"best\">#{time}</td>"
        best_found = true
      else
        td += ">#{time}</td>"
      end

      row += td
    end

    row += destroy_row(cubing_session.id)
    raw row
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
    avgs = cubing_sessions
      .includes(:solves)
      .map { |session| session_average(session) }
      .min
  end

  private

  def session_average(session)
    times = session.solves.pluck(:time)
    (times.map(&:to_f).reduce(:+) / times.size).round(2)
  end

  def date_format(date)
    date.strftime("%m\/%d\/%Y")
  end
end
