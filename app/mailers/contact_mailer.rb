class ContactMailer < ApplicationMailer
  def contact_email(arg = {})
    @name = arg[:name]
    @email = arg[:email]
    @message = arg[:message]
    mail(to: 'adamlamouri.pro@gmail.com', subject: 'Nouveau message depuis ton site')
  end
end
