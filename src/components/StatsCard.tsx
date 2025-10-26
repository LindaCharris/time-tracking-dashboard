import  type { Data } from "../types/data"
import { usePeriodStore } from "../store/period.store"


export const StatsCard = ({title, timeframes}: Data) => {

  const periodStore = usePeriodStore();

  const colors: Record<string, string> = {
    work: "bg-Orange-300-work",
    play: "bg-Blue-300-play",
    study: "bg-Pink-400-study",
    exercise: "bg-Green-400-exercise",
    social: "bg-Purple-700-social",
    selfcare: "bg-Yellow-300-self-care",
  }

  const icons: Record<string, string> = {
    work: "bg-[url(/images/icon-work.svg)]",
    play: "bg-[url(/images/icon-play.svg)]",
    study: "bg-[url(/images/icon-study.svg)]",
    exercise: "bg-[url(/images/icon-exercise.svg)]",
    social: "bg-[url(/images/icon-social.svg)]",
    selfcare: "bg-[url(/images/icon-self-care.svg)]",
  }

  const icon = icons[title.toLowerCase().replace(' ', '')];
  const color = colors[title.toLowerCase().replace(' ', '')];

  return (
    <div className={`${color} pt-8 rounded-2xl h-[175px] relative ${icon} bg-no-repeat bg-position-[right_10px_top_-10px] md:h-[230px] xl:h-[222px]`}>
      <div className="bg-Navy-900 rounded-2xl p-8 absolute bottom-0 w-full">

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">{title}</p>
          <img className="cursor-pointer" src="/images/icon-ellipsis.svg" alt="Icon Ellipsis" />
        </div>

        <div className="flex justify-between items-center md:flex-col md:items-start">

          <p className="text-[2rem] font-extralight md:text-[3rem]">
            {timeframes[periodStore.period].current}hrs
          </p>

          <p className="text-Navy-200 text-[.9375rem] md:text-[.760rem]">
            Last Week - {timeframes[periodStore.period].previous}hrs
          </p>

        </div>

      </div>
    </div>
  )
}

