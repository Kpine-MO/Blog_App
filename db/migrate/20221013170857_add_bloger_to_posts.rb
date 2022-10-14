class AddBlogerToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :bloger, foreign_key: true
  end
end
