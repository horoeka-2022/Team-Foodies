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
      id: props.restaurants ? props.restaurants.length + 1 : 0,
      name,
      dish,
      rating,
      website,
    }

    // add a new restaurant to the state
    // localStorage.setItem('data', 'newRestaurant')

    // to clear the form

    //-------------------------------- CHANGES BELOW THIS LINE --------------------------------------------------------------- /////

    if (props.restaurants) {
      props.setRestaurants((blah) => [...blah, newRestaurant]) //changed from state to blah
      event.target.reset()
      localStorage.setItem(
        'data',
        JSON.stringify([...props.restaurants, newRestaurant])
      )
    }

    //-------------------------------- CHANGES ABOVE THIS LINE --------------------------------------------------------------- /////

    navigate('/')
  }
  return (
    <form onSubmit={handleSubmit}>
      <section className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          //required={true}
        />
        <input type="text" name="dish" placeholder="Signature Dish" />
        <input type="url" name="website" placeholder="Website" />
        <input
          type="number"
          name="rating"
          placeholder="Star Rating"
          // required
          // pattern="[0-5]" //may need to change to 0-9 with * after ]
        />
        <Button>Add</Button>
      </section>
    </form>
  )
}

export default Form
