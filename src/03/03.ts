import {StudentType} from '../02/02';
import {CityType, GovernmentBuildingType, HouseType} from '../02/02_02';

export const sum = (a: number, b: number) => {
    return a + b;
}
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(stu: StudentType) {
    stu.isActive = true;
}
export const doesStudentLiveIn=(s:StudentType, cityName:string)=>{
    return (s.address.city.title===cityName)
}
export const addMoneyToBudget=(bulding:GovernmentBuildingType,budget:number)=>{
    bulding.budget+=budget
}

export const repairHouse=(houseType:HouseType)=>{
    houseType.repaired=true

}
export const toFireStaff=(Buildings:GovernmentBuildingType,
                          staffCountToFire:number)=>{
    Buildings.staffCount-=staffCountToFire
}
export const toHireStaff= (Buildings: GovernmentBuildingType, staffCountToFire: number)=>{
    Buildings.staffCount+=staffCountToFire
}