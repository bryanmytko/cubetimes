require "rails_helper"

describe "User times their solves" do
  scenario "by navigating directly" do
    visit root_path

    expect(page).to have_css(".time-1", text: "")
    expect(page).to have_css(".cubes-amt", text: "Cubes Solved: --")
    expect(page).to have_css(".avg-session", text: "Session Average: --")
    expect(page).to have_css(".avg-all", text: "Current Average: --")
    expect(page).to have_css(".fastest", text: "Fastest Time: --")
    expect(page).to have_css(".slowest", text: "Slowest Time: --")
  end

  scenario "and completes a time", js: true do
    visit root_path

    time_a_solve
    solve = page.first(".timer_val").text

    expect(page).to have_css(".time-1", text: solve)
    expect(page).to have_css(".cubes-amt", text: "Cubes Solved: 1")
    expect(page).to have_css(".avg-session", text: "Session Average: --")
    expect(page).to have_css(".avg-all", text: solve)
    expect(page).to have_css(".fastest", text: solve)
    expect(page).to have_css(".slowest", text: solve)
  end

  scenario "and completes 5 solves", js: true do
    visit root_path
    solves = []

    5.times do
      time_a_solve
      solves << page.first(".timer_val").text
    end

    fastest = solves.max
    slowest = solves.min
    current_avg =
      (solves.map(&:to_f).inject(&:+) / solves.length).round(2)

    expect(page).to have_css(".time-5", text: solves.last)
    expect(page).to have_css(".cubes-amt", text: "5")
    expect(page).to have_css(".avg-session", text: "--")
    expect(page).to have_css(".avg-all", text: current_avg)
    expect(page).to have_css(".fastest", text: solves.min)
    expect(page).to have_css(".slowest", text: solves.max)
  end

  scenario "and completes a 12 cube session", js: true do
    visit root_path

    solves = []

    12.times do
      time_a_solve
      solves << page.first(".timer_val").text
    end

    fastest = solves.max
    slowest = solves.min
    session_total = solves.dup
    session_total.delete_at(solves.find_index(fastest))
    session_total.delete_at(solves.find_index(slowest))
    current_avg =
      (solves.map(&:to_f).inject(&:+) / solves.length).round(2)
    session_avg =
      (session_total.map(&:to_f).inject(&:+) / session_total.length).round(2)

    expect(page).to have_css(".cubes-amt", text: "12")
    expect(page).to have_css(".avg-session", text: session_avg)
    expect(page).to have_css(".avg-all", text: current_avg)
    expect(page).to have_css(".fastest", text: solves.min)
    expect(page).to have_css(".slowest", text: solves.max)

    # visit statistics_path

    # expect(page).to have_css(".average", text: session_avg)
    # expect(page).to have_css(".individual-solve", text: [solves.first, solves.last])
    # expect(page).to have_css(".best", text: solves.min)
  end

  def time_a_solve
    click_button "timer_button"
    click_button "timer_button"
    click_button "Ok"
  end
end
