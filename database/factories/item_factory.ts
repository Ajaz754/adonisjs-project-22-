import factory from '@adonisjs/lucid/factories'
import Item from '#models/item'

export const ItemFactory = factory
  .define(Item, async ({ faker }) => {
    return {
      name: faker.helpers.arrayElement([
        'Black Bag',
        'Blue Bag',
        'Yellow Bag',
        'Pink Bag',
        'Red Bag',
        'Orange Bag',
        'Purple Bag',
      ]),
      description: faker.lorem.paragraphs(3),
    }
  })
  .build()
