class ApplicationController < Sinatra::Base
	
	require 'bundler' 	# requiring the bundler gem
	Bundler.require		# Bundler.require()

	set :views, File.dirname(__FILE__) + '/views'
	set :public_folder, File.dirname(__FILE__) + '/public'

	ActiveRecord::Base.establish_connection(
		:adapter => 'mysql2',
		:database => 'cats'
	)

	not_found do
		{ :message => "Not found." }.to_json
	end

	get '/' do
		{ :message => "Homepage" }.to_json
	end	
	
end