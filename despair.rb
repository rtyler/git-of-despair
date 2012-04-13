
require 'rubygems'
require 'resin/app'

module Despair
  class Server < Resin::Server
    get '/favicon.ico' do
      halt 404
    end

    get '/:name/?:repo?' do |name, repo|
      if ['css', 'js', 'images'].include? name
        pass
      end
      haml :user, :locals => {:user => name, :repo => repo}
    end
  end
end

if __FILE__ == $0
  Despair::Server.run!
end
