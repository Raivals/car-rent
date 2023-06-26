import { CarProps } from "@/types"

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "58e042e18cmsh99601ab1b419bbdp1ee568jsnaae06e846ec3",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    { headers: headers },
  )

  const result = await response.json()

  return result
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {}
