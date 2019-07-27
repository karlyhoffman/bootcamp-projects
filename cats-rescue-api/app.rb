class ApplicationController < Sinatra::Base

	require 'bundler' 	# requiring the bundler gem
	Bundler.require		# Bundler.require()

	set :views, File.dirname(__FILE__) + '/views'
	set :public_folder, File.dirname(__FILE__) + '/public'

end