module ParserConcern
  extend ActiveSupport::Concern

  @@best_time = 99999
  @@best_average = 99999

  def parse_dir times_path
    output ||= Array.new
    dir = Dir.entries(times_path)
    dir.sort_by { |a| File.stat(File.join times_path, a).mtime }
    dir.reverse.each do |f|
      next if f == '.' or f == '..' or f == '.DS_Store'
      output.push(parse_file f, times_path)
    end
    output
  end
  
  def parse_file f, times_path
    best = 99999
    file_data = ''
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
          t = '%.2f' % line[1]
          if t < best.to_s then best = t end
          if t < @@best_time.to_s then @@best_time = t end
          string += '<td>' + line[1] + '</td>'
        end
        if line =~ /\AAverage/
          line = line.split('Average: ')
          t = line[1].to_f
          if t.to_f < @@best_average then @@best_average = t.to_f end
          string += '<td class="success">' + line[1] + '</td>'
        end
      end
      file_data += string.gsub(/<td>#{best.to_s}<\/td>/,'<td class="best">' + best.to_s + '</td>')
    end
    '<tr>' + file_data + '</tr>'
  end

end