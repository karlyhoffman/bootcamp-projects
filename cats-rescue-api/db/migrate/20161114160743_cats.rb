class Cats < ActiveRecord::Migration[5.0]
  def change
  	create_table :cats do |table|
		table.string :name
		table.string :note
		table.string :img
	end
  end
end


# create table cats (
#     id INT NOT NULL AUTO_INCREMENT,
#     name VARCHAR(60)NOT NULL,
#     notes VARCHAR(150) NOT NULL,
#     image_as_base64 LONGTEXT,
#     PRIMARY KEY (id)
# );