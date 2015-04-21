class DoctorController < ApplicationController
  def index

  end
  def search
  	#parameters = { term: 'doctor', limit: 16, sort: 2, category_filter: 'cardiologist', radius_filter: 30000 }
    #render json: Yelp.client.search('New York', parameters)
    parameters = { term: params[:term], limit: 16 }
    render json: Yelp.client.search('San Francisco', parameters)
  end
end
