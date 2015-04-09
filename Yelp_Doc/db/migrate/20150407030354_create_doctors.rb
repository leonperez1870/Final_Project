class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :specialty
      t.string :address
      t.integer :rating
      t.text :review

      t.timestamps null: false
    end
  end
end
