module NavHelper
  def active_link_to(text, path)
    active_class = "active" if current_page? path
    link_to text, path, class: active_class
  end
end
