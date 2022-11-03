import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import data from '../data'
import List from './List'
import Form from './Form'

function App() {
  const [restaurants, setRestaurants] = useState(data)

  return (
    <main className="bg-red-500 w-screen h-screen flex justify-center items-center">
      <div className="mx-auto ">
        <header className="mb-20">
          <h1 className="text-center text-white text-3xl">
            Restaurant Recommendations
          </h1>
        </header>
        <div className="flex flex-col space-x-2 justify-center">
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
