import React, { ReactElement } from 'react'

type headingProps = {title: string}

type PropsType = {
  viewCart: boolean,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({viewCart, setViewCart} : PropsType) => {

  const content = (
    <header class 'header'>
      <div className='header_title-bar'>
        <h1>Mobile Co.</h1>
        <div className='header_price-box'>
          <p>Total item: </p>
          <p>Total Price: </p>
        </div>
      </div>
    </header>
  )

  return (
    <div>Header</div>
  )
} 

export default Header