import { CommentSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Post from './post.ts'
import User from './user.ts'
import Product from '#models/product'

export default class Comment extends CommentSchema {
  /**
   * A comment belongs to a user
   */
  @belongsTo(() => Post)
  declare post: BelongsTo<typeof Post>

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>

  /**
   * A comment belongs to a user
   */
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
