import "@styles/global.css";
import TimeSlotEntry from "./raspored/TimeSlotEntry";
import Footer from "./Footer";
import { useState } from "react";

const times: string[] = [];
const START_HOUR = 9;
const END_HOUR = 19; // INCLUSIVE

const TIME_SLOT_HEIGHT = 64; // Height of each time slot in pixels
const TIME_LINE_HEIGHT = 2;

for (let hour = START_HOUR; hour < END_HOUR; hour++) {
    times.push(`${hour.toString().padStart(2, "0")}:00`);
    times.push(`${hour.toString().padStart(2, "0")}:30`);
    // TODO: make the end our inclusive
}

export type EventInfo = {
    start: string;
    end: string;
    title: string;
    type: "tech" | "policy" | "keynote" | "neutral";
    speaker?: string;
};
// Example events with start and end times
const events: EventInfo[][] = [[
    {
        start: "09:00",
        end: "09:30",
        title: "Otvorenje",
        type: "neutral",
    },
    {
        start: "09:30",
        end: "10:30",
        title: "Raspadanje atoma i hakiranje mrkve",
        type: "tech",
        speaker: "Ivan Ivanic",
    },
    {
        start: "10:30",
        end: "11:30",
        title: "Kako tupim nozem hakirati zlocesti toster?",
        type: "tech",
        speaker: "Marko markic",
    },
    {
        start: "12:30",
        end: "14:00",
        title: "Some very long event name so that it maybe doesnt fit in the raspored text-box",
        type: "policy",
        speaker: "Ludomir ludic",
    },
    {
        start: "11:30",
        end: "12:30",
        title: "Keynote",
        type: "keynote",
        speaker: "Drazenka zecic",
    },
], [
    {
        start: "11:30",
        end: "14:30",
        title: "day 2 baaababbayy",
        type: "keynote",
        speaker: "Ludomir ludic",
    }
]];

// Calculate the top and height for each event
const calculateEventStyle = (start: string, end: string) => {
    const startMinutes =
        parseInt(start.split(":")[0]) * 60 + parseInt(start.split(":")[1]);
    const endMinutes =
        parseInt(end.split(":")[0]) * 60 + parseInt(end.split(":")[1]);
    const startTime = START_HOUR * 60; // 9:00 AM in minutes
    const totalMinutes = (END_HOUR - START_HOUR) * 60;

    const top =
        ((startMinutes - startTime) / totalMinutes) *
        (TIME_SLOT_HEIGHT * times.length);
    const height =
        ((endMinutes - startMinutes) / totalMinutes) *
        (TIME_SLOT_HEIGHT * times.length) +
        TIME_LINE_HEIGHT;

    return { top: `${top}px`, height: `${height}px`, zIndex: top };
};

export default function RasporedPage() {
    const timetableHeight = (19 - 9) * 2 * TIME_SLOT_HEIGHT;
    const [isDayOne, setIsDayOne] = useState<boolean>(true);

    return (
        <div className="w-full px-5 lg:mx-auto xl:w-2/3 my-10 flex flex-col gap-16 ">
            <div className="self-center flex rounded-xl text-xl bg-black text-gray-400 font-semibold">
                <button
                    className={`py-4 px-14 border-3 cursor-pointer rounded-l-xl inset-shadow-[0_0_50px_5px] uppercase border-r-0 ${isDayOne ? 'inset-shadow-white/25 border-white-smoke text-white' : 'inset-shadow-none border-gray-400'}`}
                    onClick={() => setIsDayOne(true)}
                >
                    1. dan
                </button>
                <button
                    className={`py-4 px-14 border-3 cursor-pointer rounded-r-xl inset-shadow-[0_0_50px_5px] uppercase ${!isDayOne ? 'text-white inset-shadow-white/25 border-white-smoke' : 'inset-shadow-none border-gray-400 border-l-white-smoke'}`}
                    onClick={() => setIsDayOne(false)}
                >
                    2. dan
                </button>
            </div>
            <h1 className="uppercase font-open-sans text-5xl text-center">raspored za dan {isDayOne ? "7" : "8"}.6.2025.</h1>
            <div className=" relative flex gap-x-5" style={{ height: `${timetableHeight}px` }}>
                <div className="flex flex-col">
                    {
                        times.map((time) => (
                            <div
                                key={time}
                                style={{
                                    height: `${TIME_SLOT_HEIGHT}px`,
                                }}
                            >
                                <div className="time text-sm md:text-xl font-semibold text-gray-500 font-open-sans flex items-center -translate-y-1/2">
                                    {time}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full relative">
                    {
                        times.map((time, index) => (
                            <div
                                key={time}
                                className="absolute w-full border-t border-gray-600"
                                style={{
                                    top: `${TIME_SLOT_HEIGHT * index}px`,
                                    height: `${TIME_SLOT_HEIGHT}px`,
                                    borderTopWidth: `${TIME_LINE_HEIGHT}px`,
                                }}
                            />
                        ))
                    }
                    {
                        events[Number(isDayOne)].map((event) => {
                            const style = calculateEventStyle(event.start, event.end);
                            return <TimeSlotEntry key={event.title} event={event} style={style} />;
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>


    )
}
