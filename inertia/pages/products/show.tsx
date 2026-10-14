import type { InertiaProps } from '~/types'
import type { Data } from '@generated/data'

type PageProps = InertiaProps<{
  product: Data.Product
}>

export default function ProductsShow(props: PageProps) {
  const { product } = props

  return (
    <div className="container">
      <div>
        <h1>{product.name}</h1>
      </div>

      <div className="product">
        <div className="product-meta">
          <div>
            {/* <a href={product.imgUrl} target="_blank" rel="nonrefferrer"> */}
            <a href={product.imgUrl}>{product.imgUrl}</a>
          </div>
        </div>

        <div className="product price">{product.price}</div>
      </div>
    </div>
  )
}
