import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import ProductTransformer from '#transformers/product_transformer'

export default class ProductsController {
  async index({ inertia }: HttpContext) {
    const products = await Product.query().orderBy('createdAt', 'desc')

    return inertia.render('products/index', {
      products: ProductTransformer.transform(products),
    })
  }

  async show({ inertia, params }: HttpContext) {
    const product = await Product.query().where('id', params.id).firstOrFail()

    return inertia.render('products/show', {
      product: ProductTransformer.transform(product),
    })
  }
}
