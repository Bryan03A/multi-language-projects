require 'sinatra'

# Set the public folder as the root for static files
set :public_folder, 'public'

# Main route that serves the index.html file
get '/' do
  send_file 'public/index.html'
end

set :port, 5004