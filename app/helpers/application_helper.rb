module ApplicationHelper
  def is_active path
    current_path = request.fullpath.split(/\//)
    if path == '/' && current_path[1].nil? then return 'class=active' end #root url
    if current_path == '/' && request.fullpath == '/' then return 'class=active' end
    return 'class=active' unless current_path[1] != path
  end
end
