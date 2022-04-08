import {StudentType} from '../02/02';
import {CityType, GovernmentBuildingType} from '../02/02_02';

export type ManType={
    name:string
    age:number
}
const people:Array<ManType>=[
    {name: "Andrew Ivanov", age:33},
    {name: "Alexander Petrov", age:24},
    {name: "Dmitry Sidorov", age:18},
]

const dimychTransformator=(man:ManType)=>{
    return{
        stack:["css,html","js","tdd","react"],
        firstName:man.name.split(" ")[0],
        LastName: man.name.split(" ")[1]
    }

}
const devs=[
    {
        stack:["css,html","js","tdd","react"],
        firstName:"Andrew", LastName: "Ivanov"
    },
    {
        stack:["css,html","js","tdd","react"],
        firstName:"Alexander", LastName: "Petrov"
    },
    {
        stack:["css,html","js","tdd","react"],
        firstName:"Dmitry", LastName: "Sidorov"
    }
]

const massage= people.map(man=>'Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator')
const student:StudentType={
    id:1,
    "name":"Dimych",
    age: 32,
    isActive: false,
    address:{
        streetTitle:"Surganova",
        city:{
            title:"Minsk",
            countryTitle: "Belarus",
        }

    },
    technologies:[
        {
            id:1,
            title:"HTML"
        },
        {
            id:2,
            title:"CSS"
        },
        {
            id:3,
            title:"React"
        },
    ]

}

export const getStreetsTitleOfGovernmentsBuildings= (buildings:Array<GovernmentBuildingType>)=>{
    return buildings.map(b=>b.address.street.title)
}