"use client"
import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton"

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter()

  /* logic to handle navigation (be able to show more cars) */
  const handleNavigation = () => {}

  return (
    <div className="w-full gap-5 mt-10 flex-center">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
