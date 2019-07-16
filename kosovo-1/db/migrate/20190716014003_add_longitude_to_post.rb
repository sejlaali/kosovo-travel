class AddLongitudeToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :longitude, :int
  end
end
