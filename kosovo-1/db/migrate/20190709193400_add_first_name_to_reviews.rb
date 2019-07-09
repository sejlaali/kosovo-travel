class AddFirstNameToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :first_name, :string
  end
end
