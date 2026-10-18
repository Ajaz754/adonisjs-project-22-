import User from '#models/user'
import { ProductFactory } from '#database/factories/product_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { CommentFactory } from '#database/factories/comment_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const user = await User.findByOrFail('email', 'jane@example.com')
    const products = await ProductFactory.merge({ userId: user.id }).createMany(10)

    for (const product of products) {
      await CommentFactory.merge({ postId: product.id, userId: user.id }).createMany(
        Math.floor(Math.random() * 3) + 3
      )
    }
  }
}
