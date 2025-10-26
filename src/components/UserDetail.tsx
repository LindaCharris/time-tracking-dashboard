import { usePeriodStore } from "../store/period.store"
import type { Period } from "../types/data";

export const UserDetail = () => {

  const periodStore = usePeriodStore()
  const  handleClick = (newPeriod:Period) => {
    periodStore.setPeriod(newPeriod);
  } 

  const periods: Period[] = ["daily", "weekly", "monthly"]
 
  return (
    <div className="bg-Navy-900 rounded-2xl">

      <div className="bg-Purple-600 rounded-2xl flex items-center p-8 gap-4 xl:flex-col xl:items-start xl:h-[320px] xl:w-[255px] xl:gap-10]">
        <img className="size-16 border-2 rounded-full border-white" src="/images/image-jeremy.png" alt="" />
        <div>
          <p className="text-Navy-200">Report for</p>
          <h2 className="font-extralight text-[1.475rem] xl:text-[2.5rem]">Jeremy Robson</h2>
        </div>
      </div>
 
      <ul className="flex justify-around py-6 text-lg xl:flex-col xl:p-6 xl:gap-2">
        {
          periods.map((period: Period) => {

            const name = period.charAt(0).toUpperCase() + period.slice(1)
            const isActive = period ===periodStore.period;

            return(
              <li 
              key={period}
              onClick={()=>handleClick(period)}
                className={`${isActive ? 'text-white': 'text-Navy-200' }
                hover:text-white cursor-pointer`}>
                  {name}
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}
