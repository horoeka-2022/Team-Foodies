import React from 'react'

function Button({ children }) {
  return (
    <div className="flex space-x-2 justify-center">
      <button
        type="submit"
        className="inline-block px-6 py-2.5 bg-pink-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        {children}
      </button>
    </div>
  )
}

export default Button
