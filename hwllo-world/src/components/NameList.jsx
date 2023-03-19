import React from 'react'
 import Person from './Person'

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
    const personList=persons.map(person=><Person key={person.name} person={person}/>)
    return <div>{personList}</div>
    
//     const personList=persons.map(person=><h2>I am {person.name} and My age is {person.age} and My id is {person.id}</h2>)
//   return (
//     <div>{personList}</div>
 // )
}

export default NameList