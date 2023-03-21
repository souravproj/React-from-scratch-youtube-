import React from 'react'
 import Person from './Person'

function NameList() {
    const names=['Sourav','Sampurna','Sathi']//if you can give here any kinds of same value then it will be throw error in console
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

    const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>

// const personList=persons.map(person=><Person key={person.name} person={person}/>)
// return <div>{personList}</div>
    
// const personList=persons.map(person=><h2>I am {person.name} and My age is {person.age} and My id is {person.id}</h2>)
// return (
//     <div>{personList}</div>
//  )
}

export default NameList