require 'active_support/concern'

module JnetImport
  extend ActiveSupport::Concern

  attr_reader :file

  def self.extract_times(file)
    @times if parse_times(file.path)
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

  def self.parse_times(file)
    @times = Array.new
    File.open(file).each do |line|
      if line =~ /\A[0-9]/
        line = line.split(' ')
        @times << '%.2f' % line[1]
      end
    end
  end
end
