import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import List from './List'
import Form from './Form'

function App() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('data')
    if (data) {
      setRestaurants(() => JSON.parse(data))
    } else {
      setRestaurants(() => [])
    }
  }, [])

  return (
    <main className="bg-red-500 w-screen flex justify-center items-center">
      <div className="mx-auto ">
        <header className="mb-20">
          <h1 className="text-center text-white text-3xl mt-52">
            Restaurant Recommendations
          </h1>
        </header>
        <div className="flex flex-col space-x-2 justify-center mb-52">
          <Routes>
            <Route path="/" element={<List restaurants={restaurants} />} />
            <Route
              path="/add"
              element={
                <Form
                  restaurants={restaurants}
                  setRestaurants={setRestaurants}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </main>
  )
}

export default App
