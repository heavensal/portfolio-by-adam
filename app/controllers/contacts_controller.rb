class ContactsController < ApplicationController
  def send_email
    contact = {
      name: params[:name],
      email: params[:email],
      message: params[:message]
    }
    ContactMailer.contact_email(contact).deliver_now!
    redirect_to root_path
  end
end
