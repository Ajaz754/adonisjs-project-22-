import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {})
  }

  async down() {
    this.schema.alterTable('products', (table) => {
      table.dropColumn('userId')
    })
  }
}
