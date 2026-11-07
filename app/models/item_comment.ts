import { ItemCommentSchema } from '#database/schema'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo } from '@adonisjs/lucid/orm'
import Item from '#models/item'

export default class ItemComment extends ItemCommentSchema {
  @belongsTo(() => Item)
  declare item: BelongsTo<typeof Item>
}
