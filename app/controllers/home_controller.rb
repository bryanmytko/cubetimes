class HomeController < ApplicationController
  def index
    times_path = File.join Rails.root, 'public', 'times'
    @timesArray ||= Array.new
    Dir.foreach(times_path) do |f|
      next if f == '.' or f == '..' or f == '.DS_Store'
      single_file = File.open(File.join times_path, f)
      File.open(single_file,'r') do || 
        string = ''    
        single_file.each do |line|
          if line =~ /JNetCube Session Statistics/
            line = line.split('----- JNetCube Session Statistics for ')
            line = line[1].split('-----')
            d = Date.parse(line[0])
            string += '<td>' + d.strftime("%d-%m-%Y") + '</td>'
          end
          if line =~ /\A[0-9]/
            line = line.split(' ')
            string += '<td>' + line[1] + '</td>'
          end
          if line =~ /\AAverage/
            line = line.split('Average: ')
            string += '<td class="success">' + line[1] + '</td>'
          end
        end
        @timesArray.push('<tr>' + string + '</tr>')
      end
    end
  end
end
