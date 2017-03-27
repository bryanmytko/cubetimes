require 'active_support/concern'

module JnetImport
  extend ActiveSupport::Concern

  attr_reader :file

  def self.extract_times(file)
    File.open(file.path).map do |line|
      if line =~ /\A[0-9]/
        line = line.split(" ")
        "%.2f" % line[1]
      end
    end.compact
  end

  def self.extract_scrambles(file)
    File.open(file.path).map do |line|
      line
        .split(" ")
        .select { |l| l =~ /[A-Z]/ }
        .join(" ") if line =~ /\A[0-9]/
    end.compact
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
end

