class Request < ActiveRecord::Base
  validates :info, presence: true
  validates :quantity, presence: true
  validates :customer_name, presence: true
  validates :customer_email, presence: true
  validates :customer_phone, presence: true
  validates :destination_city, presence: true
end
