import React, { useState } from 'react'
import useCart from '../hooks/useCart'
import { CartLineItem } from './layout/CartLineItem'

export const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false)

  const { dispatch, REDUCER_ACTION, totalItems, totalPrice, cart} = useCart()

  const onSubmitOrder = () => {
    dispatch({type: REDUCER_ACTION.SUBMIT})
    setConfirm(true)
  }

  const pageContent = confirm 
      ? <h2>Thank you for your order.</h2>
      : <>
        <h2 className='offScreen'>Cart</h2>
        <ul className='cart'>
          {
            cart.map(item => {
              return (
                <CartLineItem 
                  key={item.sku}
                  item={item}
                  dispatch={dispatch}
                  REDUCER_ACTION={REDUCER_ACTION}
                />
              )
            })
          }
        </ul>
        <div className="cart_totals">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
          <button className='cart_submit' disabled={!totalItems} onClick={onSubmitOrder}>Place Order</button>
        </div>
      </>
      const content = (
        <main className="main main--cart">{pageContent}</main>
      )
  return content
}
