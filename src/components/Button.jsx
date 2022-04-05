import React from 'react'

const Button = ({ moreButton, setMoreButton, children }) => {
  return (
    <>
      <button
        type="button"
        className="more-chuck flex md:min-w-max justify-around self-start md:items-center"
        onClick={() => setMoreButton(!moreButton)}
      >
        {children}
      </button>
    </>
  )
}

export default Button