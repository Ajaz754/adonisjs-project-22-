import factory from '@adonisjs/lucid/factories'
import Product from '#models/product'

export const ProductFactory = factory
  .define(Product, async ({ faker }) => {
    return {
      title: faker.helpers.arrayElement([
        'Black Bag',
        'Brown Purse',
        'Yellow T-shirt',
        'Green Shorts',
        'Orange Jeans',
        'Red hat',
      ]),
    }
  })
  .build()