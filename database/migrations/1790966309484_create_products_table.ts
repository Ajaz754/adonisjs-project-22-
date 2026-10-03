import { BaseSchema } from '@adonisjs/lucid/schema'
import { toReadableSync } from 'node:stream/iter'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('img_url').notNullable()
      table.text('description').notNullable()
      table.float('price').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
