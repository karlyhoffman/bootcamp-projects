require "sinatra/base"

require "./controllers/application_controller"
require "./controllers/cats_controller"

require "./models/cat"

map('/') { run ApplicationController }
map('/cats') { run CatsController }