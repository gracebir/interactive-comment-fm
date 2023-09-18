import React from 'react'

const Button = ({text}:{text: string}) => {
  return (
    <button type='submit' className="bg-blue font-medium uppercase rounded-md hover:bg-grayish duration-300 px-5 lg:px-6 py-2 lg:py-3 text-off-white">
      {text}
    </button>
  )
}

export default Button
