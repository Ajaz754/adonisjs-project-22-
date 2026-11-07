import { ItemSchema } from '#database/schema'
import ItemComment from '#models/item_comment'
import { hasMany, belongsTo } from '@adonisjs/lucid/orm'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class Item extends ItemSchema {
  @hasMany(() => ItemComment)
  declare item_comments: HasMany<typeof ItemComment>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
