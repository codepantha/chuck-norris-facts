import React from 'react'

const Button = ({ getJoke, children }) => {
  return (
    <>
      <button
        type="button"
        className="p-4 md:self-center shadow-md rounded-md bg-primary text-secondaryContrast outline-none cursor-pointer"
        onClick={getJoke}
      >
        {children}
      </button>
    </>
  )
}

export default Button