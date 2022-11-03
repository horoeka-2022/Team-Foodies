import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './Button'

function Form(props) {
  // a function to call on the route to redirect to
  const navigate = useNavigate()

  function handleSubmit(event) {
    // to prevent the browser form reloading
    event.preventDefault()

    const name = event.currentTarget.elements.name.value
    const dish = event.currentTarget.elements.dish.value
    const rating = event.currentTarget.elements.rating.value
    const website = event.currentTarget.elements.website.value

    const newRestaurant = {
      id: props.restaurants.length + 1,
      name,
      dish,
      rating,
      website,
    }

    // add a new book to the state
    props.setRestaurants((blah) => [...blah, newRestaurant]) //changed from state to blah

    // to clear the form
    event.target.reset()

    navigate('/')
  }
  return (
    <form onSubmit={handleSubmit}>
      <section className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          required={true}
        />
        <input type="text" name="dish" placeholder="Signature Dish" />
        <input type="url" name="website" placeholder="Website" />
        <input
          type="number"
          name="rating"
          placeholder="Star Rating"
          required
          pattern="[0-5]" //may need to change to 0-9 with * after ]
        />
        <Button>Add</Button>
      </section>
    </form>
  )
}

export default Form
