import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
  return (
    <>
      <Link to="/add">Add New Restaurant</Link>
      <ul>
        {props.restaurants?.map((restaurant) => (
          <li key={restaurant.id} className="p-4 m-4 bg-white shadow-lg">
            <p>{restaurant.name}</p>
            <p>{restaurant.dish}</p>
            <p>{restaurant.rating}</p>
            <p>{restaurant.website}</p>: <p>"add a restaurant!"</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
