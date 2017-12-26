class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :saved_game
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
