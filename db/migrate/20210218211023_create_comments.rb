class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :likes
      t.string :post
      t.integer :wordcount
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :story, null: false, foreign_key: true

      t.timestamps
    end
  end
end
