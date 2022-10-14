class CreateBlogers < ActiveRecord::Migration[6.1]
  def change
    create_table :blogers do |t|
      t.string :username
      t.string :password_digest
      t.string :about

      t.timestamps
    end
  end
end
