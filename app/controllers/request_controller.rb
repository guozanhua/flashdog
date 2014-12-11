class RequestController < ApplicationController
  def create
    @request=Request.new(:info=>params[:info],
                   :link=>params[:link],
                   :quantity=>params[:quantity],
                   :destination_city=>params[:destination_city],
                   :customer_comment=>params[:customer_comment],
                   :customer_name=>params[:customer_name],
                   :customer_email=>params[:customer_email],
                   :customer_phone=>params[:customer_phone])

    if @request.save
      hide_form= "$('#request').hide('slow');" 
      success_message= '$("<span style=\"font-size: 70px;\" class=\"icon fa-check\"></span><h2>принят!</h2>").insertAfter("#request");'
      render :js => hide_form + success_message
    end 
  end  
end


