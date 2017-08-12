require 'active_support/concern'

module JnetImport
  extend ActiveSupport::Concern

  attr_reader :file

  def self.extract_solves(file)
    File
      .open(file.path)
      .select { |line| line[/\A[0-9]+\)/] }
      .map do |line|
        {
          time: self.extract_time(line),
          scramble: self.extract_scramble(line)
        }
      end
  end

  def self.extract_date(file)
    line = File.open(file.path).first
    if line =~ /----- JNetCube Session Statistics for /
      line = line.split("for")
      date = line[1].split(" --")[0].strip!
    else
      Date.today
    end
  end


  private

  def self.extract_time(line)
    line = line.split(" ")
    "%.2f" % line[1]
  end

  def self.extract_scramble(line)
    line
      .split(" ")
      .select { |l| l[/[A-Z]/] }
      .join(" ")
  end

  class SolveCreator
    def initialize(solve:, cubing_session:)
      Solve.create(
        time: solve[:time],
        scramble: solve[:scramble],
        cubing_session: cubing_session
      )
    end
  end
end

