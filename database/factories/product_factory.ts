import factory from '@adonisjs/lucid/factories'
import Product from '#models/product'

export const ProductFactory = factory
  .define(Product, async ({ faker }) => {
    return {
      name: faker.helpers.arrayElement([
        'Black Bag',
        'Brown Purse',
        'Yellow T-shirt',
        'Green Shorts',
        'Orange Jeans',
        'Red hat',
      ]),
      description: faker.lorem.paragraph(),
      price: faker.number.float({ min: 1, max: 100 }),
    }
  })
  .build()
