# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
=begin
require 'net/http'
require 'uri'
require 'json'

uri = URI.parse("https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/psn/gamer/kenji_api24/profile/type/mp")
json = Net::HTTP.get(uri)
data = JSON.parse(json)

puts data
=end
