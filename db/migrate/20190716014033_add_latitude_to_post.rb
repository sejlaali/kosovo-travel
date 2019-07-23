class AddLatitudeToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :latitude, :int
  end
end
