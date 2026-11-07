import { ItemFactory } from '#database/factories/item_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import { CommentFactory } from '#database/factories/comment_factory'

export default class extends BaseSeeder {
  async run() {
    const user = await User.findByOrFail('email', 'jane@example.com')
    const items = await ItemFactory.merge({ userId: user.id }).createMany(10)

    for (const item of items) {
      await CommentFactory.merge({ item_id: item.id, userId: user.id }).createMany(
        Math.floor(Math.random() * 3) + 3
      )
    }
  }
}
