class DoctorController < ApplicationController
  def index
  	specialty_search = gets.chomp
  	location = gets.chomp
  	distance = gets.chomp.to_i
  end
  def search
  	parameters = { term: params[:term], limit: 16 }
    render json: Yelp.client.search('#{user_choice}', parameters)
  end
  def show
  end
end
