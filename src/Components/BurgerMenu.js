import React from 'react'

function BurgerMenu(props) {
  return (
    <button onClick={props.handleBurgerMenu}>
      Burger Menu
    </button>
  )
}

export default BurgerMenu