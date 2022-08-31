import React from 'react'

function File({ name }) {
  return (
    <div key={name}>
      <span>{name}</span>
    </div>
  )
}

export default File;