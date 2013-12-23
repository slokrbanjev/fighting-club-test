require 'zen-grids'

activate :i18n, :mount_at_root => false
activate :livereload

helpers do
  def nav_link(link_text, url, options = {})  
    options[:class] ||= ""
    options[:class] << " active" if url == current_page.url
    link_to(link_text, url, options)
  end 
end

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :gzip
  activate :asset_hash
end

activate :deploy do |deploy|
  deploy.method = :rsync
  deploy.host   = "core.booncon.com"
  deploy.path   = "/var/www/fighting-club"
  # Optional Settings
  deploy.user  = "root" # no default
  deploy.build_before = true
  # deploy.port  = 5309 # ssh port, default: 22
  # deploy.clean = true # remove orphaned files on remote host, default: false
  # deploy.flags = "-rltgoDvzO --no-p --del -e" # add custom flags, default: -avze
end