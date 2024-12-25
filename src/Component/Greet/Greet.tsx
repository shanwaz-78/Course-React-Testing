import React from 'react'

type GreetProp = {
  name? : string
}

const Greet = ({name} : GreetProp) => {
  return (
    <div>
      Hello {name}
    </div>
  )
}

export default Greet
