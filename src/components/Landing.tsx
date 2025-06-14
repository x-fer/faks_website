import "@styles/global.css";
import { Calendar, MapPin, Icon, type LucideIcon } from "lucide-react";
type ISTProps = {
  icon: LucideIcon;
  text: string;
};
const IconSpacerText = ({ text, icon: Icon }: ISTProps) => (
  <div className="flex items-center gap-2 xl:gap-8">
    <Icon className="text-attack-darker-red size-10 xl:size-15" />
    <div className="bg-attack-darker-red h-15 w-1 xl:h-20"></div>
    <div className="font-open-sans text-lg font-semibold text-[#CCCCCC] md:text-xl xl:text-3xl">
      {text}
    </div>
  </div>
);
export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 px-5 md:hidden">
        <img
          src="/hero.svg"
          className="mx-auto w-full max-w-96"
          alt="Hero image"
        />
        <img
          src="/FAKS.svg"
          className="mx-auto w-full max-w-96"
          alt="FAKS logo"
        />
        <div className="font-open-sans mx-auto flex w-full max-w-96 justify-between text-center text-lg font-semibold text-gray-400 sm:text-xl">
          <p>
            7. i 8.{" "}
            <span className="text-attack-darker-red font-bold">lipnja</span>{" "}
            2025.
          </p>
          <p>
            FER,{" "}
            <span className="text-attack-darker-red font-bold">Ulica Grada Vukovara 39</span>,
            Zagreb
          </p>
        </div>

      </div>
      <div className="container mx-auto hidden h-screen flex-grow grid-cols-5 md:grid">
        <div className="col-span-3 my-auto flex-col space-y-30">
          <img src="/FAKS.svg" className="z-20 w-full" alt="FAKS logo" />
          <div className="mx-4 flex items-center justify-between">
            <IconSpacerText text="7. i 8. lipnja 2025." icon={Calendar} />
            <IconSpacerText text="FER, Ulica Grada Vukovara 39 Zagreb" icon={MapPin} />
          </div>
        </div>
        <img src="/hero.svg" className="col-span-2 my-auto" alt="Hero image" />
      </div>
    </>
  );
}