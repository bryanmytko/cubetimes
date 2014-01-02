class HomeController < ApplicationController
  def index
    times_path = File.join Rails.root, 'public', 'times'
    @timesArray ||= Array.new
    dir = Dir.entries(times_path).sort_by { |a| File.stat(File.join times_path, a).mtime }
    @best_time = 99999
    @best_average = 99999
    dir.reverse.each do |f|
      next if f == '.' or f == '..' or f == '.DS_Store'
      best = 9999
      single_file = File.open(File.join times_path, f)
      File.open(single_file,'r') do || 
        string = ''    
        single_file.each do |line|
          if line =~ /JNetCube Session Statistics/
            line = line.split('----- JNetCube Session Statistics for ')
            line = line[1].split('-----')
            d = Date.parse(line[0])
            string += '<td>' + d.strftime("%m-%d-%Y") + '</td>'
          end
          if line =~ /\A[0-9]/
            line = line.split(' ')
            if line[1].to_f < best then best = line[1].to_f end
            if line[1].to_f < @best_time then @best_time = line[1].to_f end
            string += '<td>' + line[1] + '</td>'
          end
          if line =~ /\AAverage/
            line = line.split('Average: ')
            if line[1].to_f < @best_average then @best_average = line[1].to_f end
            string += '<td class="success">' + line[1] + '</td>'
          end
        end
        string.gsub!(/<td>#{best}<\/td>/,'<td class="best">' + best.to_s + '</td>')
        @timesArray.push('<tr>' + string + '</tr>')
      end
    end
  end
end
