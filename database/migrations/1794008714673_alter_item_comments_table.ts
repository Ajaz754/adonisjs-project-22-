import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'item_comments'

  async up() {
    this.schema.alterTable('item_comments', (table) => {
      table.integer('item_id').unsigned().notNullable()
      table.foreign('item_id').references('item.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {})
  }
}
