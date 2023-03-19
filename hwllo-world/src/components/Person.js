import React from 'react'

function Person({person,key}) {
  return (
    <div>
        <h2>I am {person.name} and My age is {person.age} and My ID is {person.id} AND I HAVE BRIEF IDEA ON {person.skill} </h2>
    </div>
  )
}

export default Person