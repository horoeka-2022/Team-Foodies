import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
  return (
    <>
      <Link to="/add">Add New Restaurant</Link>
      <ul>
        {props.restaurants?.map((restaurant) => (
          <li key={restaurant.id} className="p-4 m-4 bg-white shadow-lg">
            <p>Name: {restaurant.name}</p>
            <p>Dish: {restaurant.dish}</p>
            <p>Stars: {restaurant.rating}</p>
            <p>Site: {restaurant.website}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
