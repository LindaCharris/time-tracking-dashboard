import { StatsCard } from "./StatsCard"
import  data from "../../data.json"
import type { Data } from "../types/data";

export const StatsContainer = () => {
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-3 xl:flex-1">
      {
        data.map((item: Data) => (
          <StatsCard
            key={item.title} 
            {...item} 
          />)
        )
      }

    </div>
  )
}
