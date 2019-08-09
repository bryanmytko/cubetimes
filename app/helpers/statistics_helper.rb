module StatisticsHelper
  def display_row(cubing_session)
    row =  "<td>#{date_format(cubing_session.created_at)}</td>"
    row += "<td class=\"average\">" \
      "#{session_average(cubing_session)}</td>"

    solves = cubing_session.solves
    times = solves.pluck(:time).collect(&:to_f)
    best_found = false

    solves.each do |solve|
      time = solve.time.to_f
      td = "<td title=\"#{scramble_title(solve)}\""
      td += " class=\"individual-solve"

      if time == times.min && best_found == false
        td += " best\">#{time}</td>"
        best_found = true
      else
        td += "\">#{time}</td>"
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
      data: { confirm: t(".delete_time") }
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
    cubing_sessions
      .includes(:solves)
      .map { |session| session_average(session) }
      .min
  end

  private

  def session_average(session)
    times = session.solves.pluck(:time).tap do |time|
      time.shift
      time.pop
    end

    (times.map(&:to_f).reduce(:+) / times.size).round(2)
  end

  def date_format(date)
    date.strftime("%m\/%d\/%Y")
  end

  def scramble_title(solve)
    solve.scramble || t(".scramble_missing")
  end
end
