class DoctorController < ApplicationController
  def index
  end
  def search
  	parameters = { term: params[:term], limit: 16 }
    render json: Yelp.client.search('#{user_choice}', parameters)
  end
  def show
  end
end
