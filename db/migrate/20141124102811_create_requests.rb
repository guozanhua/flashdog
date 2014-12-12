class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.text :info
      t.text :link
      t.integer :quantity
      t.string :destination_city
      t.text :customer_comment
      t.string :customer_name
      t.string :customer_email
      t.string :customer_phone
      t.text :our_comment
      t.boolean :complited

      t.timestamps
    end
  end
end
