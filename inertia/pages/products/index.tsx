import type { InertiaProps } from '~/types'
import type { Data } from '@generated/data'

type PageProps = InertiaProps<{
  products: Data.Product[]
}>

export default function ProductsIndex(props: PageProps) {
  const { products } = props

  return (
    <div className="container">
      <div className="product-list-title">
        <h1>Products</h1>
      </div>
      {products.map((product) => (
        <div key={product.id} className="product item">
          <h2>{product.name}</h2>

          <div className="product-meta">
            <div>
              {/* <a href={product.imgUrl} target="_blank" rel="nonreferrer"> */}
              <a href={product.imgUrl}>{product.imgUrl}</a>
            </div>

            <span>.</span>
          </div>
        </div>
      ))}
    </div>
  )
}
