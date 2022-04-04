import React from 'react'

const Button = ({ moreButton, setMoreButton, children }) => {
  return (
    <>
      <button
        type="button"
        className="more-chuck flex md:w-3/12 justify-around items-center"
        onClick={() => setMoreButton(!moreButton)}
      >
        {children}
      </button>
    </>
  )
}

export default Button