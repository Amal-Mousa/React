import React from 'react'

function DishList({ name, description, price}) {
  return (
    <>
      <li  className="card">
        <h3>{name}</h3>
        <p>{description ? description : ' '}</p>
        <span>${price}</span>
      </li>
    </>
  )
}

export default DishList
// rfce