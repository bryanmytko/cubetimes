class SessionParser
  attr_reader :file

  WHITELIST = %w(text/plain).freeze
  HEADLINE = /----- JNetCube Session Statistics for /.freeze

  def initialize(file)
    @file = file
    raise FileTypeError unless valid_file_format?
  end

  def solves
    File
      .open(file.path)
      .select { |line| line[/\A[0-9]+\)/] }
      .map do |line|
        {
          time: extract_time(line),
          scramble: extract_scramble(line)
        }
      end
  end

  def valid_file_format?
    file.content_type && WHITELIST.include?(file.content_type)
  end

  def date
    line = File.open(file.path).first

    if line =~ HEADLINE
      line = line.split("for")
      date = line[1].split(" --")[0].strip!
    else
      Date.today
    end
  end

  private

  def extract_time(line)
    line = line.split(" ")
    "%.2f" % line[1]
  end

  def extract_scramble(line)
    line
      .split(" ")
      .select { |l| l[/[A-Z]/] }
      .join(" ")
  end

  class FileTypeError < StandardError
  end
end
