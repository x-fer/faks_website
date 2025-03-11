import { cn } from "@src/assets/lib/utils";
import type { EventInfo } from "../RasporedPage.astro";

type Props = {
    event: EventInfo
    style: {},
}

export default function TimeSlotEntry({ event, style }: Props) {
    return (
        <div className={cn(
            "rounded-xl absolute px-4 py-3 border-2 md:border-3 inset-shadow-[0_0_50px_5px] flex flex-col justify-between",
            event.type === "tech" && "left-5 w-5/12 bg-[#360E12] border-[#711B38] inset-shadow-red-500/15",
            event.type === "policy" && "right-5 w-5/12 bg-[#0C142F] border-[#017EFE] inset-shadow-blue-600/15",
            event.type === "keynote" && "inset-x-5 bg-[#1D1025] border-[#752C7B] inset-shadow-purple-600/15",
            event.type === "neutral" && "inset-x-5 bg-[#113711] border-[#0C8A19] inset-shadow-green-600/15")}
            style={{ ...style }}
        >
            <p className="font-open-sans text-md md:text-xl text-white-smoke">{event.title}</p>
            {event.speaker &&
            <div className="flex">
                <p className="font-open-sans uppercase text-xs md:text-lg text-gray-400">{event.speaker}</p>
            </div>
            }
        </div>
    )
}

