import type User from '#models/user'
import type Post from '#models/post'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class PostPolicy extends BasePolicy {
  edit(user: User, post: Post) {
    return user.id === post.userId
  }

  delete(user: User, post: Post) {
    return user.id === post.userId
  }
}
