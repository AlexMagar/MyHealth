import React, { ReactElement } from 'react'
import useCart from '../hooks/useCart'
import { useProducts } from '../hooks/useProducts'
import { Product } from './layout/Product'

export const ProductList = () => {

  const {dispatch, REDUCER_ACTION, cart} = useCart()

  const {products} = useProducts()

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

  if(products?.length){
    const inCart: boolean = cart.some(item => item.sku === products.sku)

    return (
      <Product 
          key={products.sku} 
          products={products} 
          dispatch={dispatch}
          REDUCER_ACTION={REDUCER_ACTION}
          inCart={inCart}
      />
    )
  }

  const content = (
    <main className="main main--products">
      {pageContent}
    </main>
  )

  return content
}
