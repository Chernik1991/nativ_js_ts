import {CityType, GovernmentBuildingType} from '../02/02_02';

export function demolishHousesOnTheStreet(city:CityType,street:string){
    city.houses=city.houses.filter(h=>h.address.street.title!==street)
}

export const getBuildingsWithStaffCountGreaterThen= (buildings: Array<GovernmentBuildingType>, number: number)=>{
return(
    buildings.filter(b=>b.staffCount>500)
)
}