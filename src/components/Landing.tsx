import "@styles/global.css";
import { Calendar, MapPin, Icon, type LucideIcon } from "lucide-react";

type ISTProps = {
  icon: LucideIcon,
  text: string
}
const IconSpacerText = ({ text, icon: Icon }: ISTProps) => (
  <div className="flex items-center gap-2 xl:gap-8">
    <Icon className="text-attack-darker-red size-10 xl:size-15" />
    <div className="bg-attack-darker-red h-15 xl:h-20 w-1"></div>
    <div
      className="font-open-sans text-lg md:text-xl font-semibold text-[#CCCCCC] xl:text-3xl"
    >
      {text}
    </div>
  </div>
)
export default function Landing() {
  return (
    <>
      <div className="flex flex-col gap-10 px-5 md:hidden items-center">
        <img src="/hero.svg" className="mx-auto w-full max-w-96" alt="Hero image" />
        <img src="/FAKS.svg" className="mx-auto w-full max-w-96" alt="FAKS logo" />
        <div
          className="font-open-sans mx-auto flex w-full max-w-96 justify-between font-semibold text-gray-400 text-lg sm:text-xl text-center"
        >
          <p>7. i 8. <span className="text-attack-darker-red font-bold">lipnja</span> 2025.</p>
          <p>FER, <span className="text-attack-darker-red font-bold">Unska 3</span>, Zagreb</p>
        </div>
        <a href="/info" className="px-12 py-2 inset-shadow-[0_0_50px_5px] inset-shadow-attack-red/20 border-2 bg-black text-lg rounded-md border-attack-darker-red font-open-sans w-min text-gray-400 text-nowrap font-semibold">Saznaj više</a>
      </div>

      <div className="flex-grow mx-auto hidden h-screen md:grid grid-cols-5 container">


        <div className="col-span-3 flex-col space-y-30 my-auto">
          <img src="/FAKS.svg" className="z-20 w-full" alt="FAKS logo" />

          <div className="mx-4 flex items-center justify-between">
            <IconSpacerText text="7. i 8. lipnja 2025." icon={Calendar} />
            <IconSpacerText text="FER, Unska 3, Zagreb" icon={MapPin} />
          </div>

        </div>


        <img src="/hero.svg" className="col-span-2 my-auto" alt="Hero image" />


      </div>
    </>
  )
}