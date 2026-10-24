import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products_and_comments'

  async up() {
    this.schema.alterTable('products', (table) => {
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
    })

    this.schema.alterTable('comments', (table) => {
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')

      table.integer('product_id').unsigned().notNullable()
      table.foreign('product_id').references('products.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable('products', (table) => {
      table.dropForeign(['user.id'])
      table.dropColumn('user.id')
    })

    this.schema.alterTable('comments', (table) => {
      table.dropForeign(['user_id'])
      table.dropForeign(['product_id'])
      table.dropColumn('user_id')
      table.dropColumn('product_id')
    })
  }
}
