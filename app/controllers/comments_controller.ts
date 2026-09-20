import type { HttpContext } from '@adonisjs/core/http'
import Comment from '#models/comment'
import { createCommentValidator } from '#validators/comment'

export default class CommentsController {
  async store({ request, auth, params, response }: HttpContext) {
    const payload = await request.validateUsing(createCommentValidator)

    await Comment.create({
      ...payload,
      postId: params.id,
      userId: auth.user!.id,
    })

    return response.redirect().back()
  }
}
