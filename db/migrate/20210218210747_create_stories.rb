class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.integer :likes
      t.integer :wordcount
      t.string :text
      t.string :author
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :photo, null: false, foreign_key: true

      t.timestamps
    end
  end
end
