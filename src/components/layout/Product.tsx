import React from 'react'
import { ProductType } from '../../context/ProductsProvider'
import { ReducerAction, ReducerActionType } from '../../context/CartProvider'


type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTION: ReducerActionType,
    inCart: boolean
}

const Product = ({product, dispatch, REDUCER_ACTION, inCart}: PropsType): ReactElement =>{

    // old of doing in TS, it will not work with vite
    // const img: string = require(`../../assets/${product.sku}.svg`)

    const img: string = new URL(`../../assets/${product.sku}.svg`, import.meta.url).href

    console.log(img)

    const onAddToCart = () => dispatch({type: REDUCER_ACTION.ADD, payload: {...product, qty: 1}})

    const itemInput = inCart ? ' → Item in Cart: ✔️ ' : null

    const content = (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className='product_img' />
            <p>{new Intl.NumberFormat('en-UK', {style:'currency', currency: 'USD'}).format(product.price)}</p>
            <button onClick={onAddToCart}>Add to cart</button>
        </article>
    )
  return content
}


