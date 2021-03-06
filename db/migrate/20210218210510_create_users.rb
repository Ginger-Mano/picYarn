class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :location
      t.string :comment
      t.string :description
      t.string :image
      t.string :interest_tag

      t.timestamps
    end
  end
end
