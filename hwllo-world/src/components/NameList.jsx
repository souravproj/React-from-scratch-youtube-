import React from 'react'

function NameList() {
    const persons=[
        {
            id:1,
            name:'Sourav',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Sampurna',
            age:29,
            skill:'Dotnet'
        },
        {
            id:3,
            name:'Sathi',
            age:28,
            skill:'Angular'
        }
    ]
    
    const personList=persons.map(person=><h2>I am {person.name} and My age is {person.age} and My ID is {person.id}</h2>)
  return (
    <div>{personList}</div>
  )
}

export default NameList