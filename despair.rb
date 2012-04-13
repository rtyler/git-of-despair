
require 'rubygems'
require 'resin/app'

module Despair
  class Server < Resin::Server
    get '/favicon.ico' do
      halt 404
    end

    get '/:name' do |name|
      haml :project, :locals => {:project => name}
    end
  end
end

if __FILE__ == $0
  Despair::Server.run!
end
