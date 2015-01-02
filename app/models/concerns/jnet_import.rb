require 'active_support/concern'

module JnetImport
  extend ActiveSupport::Concern

  attr_reader :file

  def self.extract_times(file)
    @times if parse_times(file.path)
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
