import { BaseSchema } from '@adonisjs/lucid/schema'
export default class extends BaseSchema {
  protected tableName = 'items_and_item_comments'

  async up() {
    this.schema.alterTable('items', (table) => {
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
    })

    this.schema.alterTable('item_comments', (table) => {
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('user.id').onDelete('CASCADE')

      table.integer('item_id').unsigned().notNullable()
      table.foreign('item_id').references('item.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {})
  }
}
