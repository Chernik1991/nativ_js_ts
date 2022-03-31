import {getStreetsTitleOfGovernmentsBuildings, ManType} from './05_01';

let people:Array<ManType>=[
    {name: "Andrew Ivanov", age:33},
    {name: "Alexander Petrov", age:24},
    {name: "Dmitry Sidorov", age:18},
]

beforeEach(()=>{
    people=[
        {name: "Andrew Ivanov", age:33},
        {name: "Alexander Petrov", age:24},
        {name: "Dmitry Sidorov", age:18},
    ]
})


test('List of streets title of governments buildings',
    () => {
        let streetsNames=getStreetsTitleOfGovernmentsBuildings(city.governmentBuildings);

        expect(streetsNames.length).toBe(2);
        expect(streetsNames[0]).toBe("Central Str")
        expect(streetsNames[0]).toBe("South Str")

})