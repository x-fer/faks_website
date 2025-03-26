import "@styles/global.css";
import TimeSlotEntry from "./raspored/TimeSlotEntry";
import Footer from "./Footer";
import { useState, useMemo } from "react";
import { cn } from "@src/assets/lib/utils";

const times: string[] = [];
const START_HOUR = 9;
const END_HOUR = 19; // INCLUSIVE
// TODO: extend this to 20 hours, need to adjust height of time displkay

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
  small?: boolean;
};
// Example events with start and end times
const events: EventInfo[][] = [
  [
    {
      start: "09:30",
      end: "10:00",
      title: "Otvorenje",
      type: "neutral",
    },
    {
      start: "10:00",
      end: "10:45",
      title: "TBA - Policy keynote",
      type: "keynote",
      speaker: "TBA",
    },
    // talks set 1
    {
      start: "11:00",
      end: "11:45",
      title: "TBA",
      type: "tech",
      speaker: "TBA",
    },
    {
      start: "11:00",
      end: "11:45",
      title: "TBA",
      type: "policy",
      speaker: "TBA",
    },
    // talks set 2
    {
      start: "12:00",
      end: "12:45",
      title: "TBA",
      type: "tech",
      speaker: "TBA",
    },
    {
      start: "12:00",
      end: "12:45",
      title: "TBA",
      type: "policy",
      speaker: "TBA",
    },
    // lunch
    {
      start: "12:45",
      end: "13:45",
      title: "Ručak",
      type: "neutral",
    },
    {
      start: "13:45",
      end: "14:30",
      title: "TBA - Tech keynote",
      type: "keynote",
      speaker: "TBA",
    },
    {
      start: "14:30",
      end: "14:45",
      title: "Intermezzo - Zahvale",
      type: "neutral",
      small: true,
    },
    {
      start: "14:45",
      end: "15:30",
      title: "TBA",
      type: "tech",
      speaker: "TBA",
    },
    {
      start: "14:45",
      end: "15:30",
      title: "TBA",
      type: "policy",
      speaker: "TBA",
    },
    {
      start: "15:30",
      end: "16:00",
      title: "Kaffica time!",
      type: "neutral",
    },
    {
      start: "16:00",
      end: "16:45",
      title: "TBA",
      type: "tech",
      speaker: "TBA",
    },
    {
      start: "16:00",
      end: "16:45",
      title: "TBA",
      type: "policy",
      speaker: "TBA",
    },
    {
      start: "17:00",
      end: "17:45",
      title: "TBA",
      type: "tech",
      speaker: "TBA",
    },
    {
      start: "17:00",
      end: "17:45",
      title: "TBA",
      type: "policy",
      speaker: "TBA",
    },
  ],
  [
    {
      start: "11:30",
      end: "14:30",
      title: "TBA",
      type: "keynote",
      speaker: "TBA",
    },
  ],
];

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

type DaySelectButtonProps = {
  onClick: () => void;
  className: string;
  isSelected: boolean;
  text: string;
};
const DaySelectButton = ({
  onClick,
  className,
  text,
  isSelected,
}: DaySelectButtonProps) => {
  return (
    <button
      className={cn(
        "mx-auto flex w-full cursor-pointer items-end justify-center border-3 py-3 text-center uppercase inset-shadow-[0_0_50px_5px] md:border-3",
        isSelected
          ? "border-white-smoke text-white inset-shadow-white/25"
          : "border-l-white-smoke border-gray-400 inset-shadow-none",
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default function RasporedPage() {
  const timetableHeight = (END_HOUR - START_HOUR) * 2 * TIME_SLOT_HEIGHT;
  const [dayIndex, setDayIndex] = useState<number>(0);

  return (
    <div className="my-10 flex w-full flex-col gap-10 px-5 md:gap-16 lg:mx-auto xl:w-2/3">
      <div className="text-md flex w-2/3 self-center rounded-xl bg-black font-semibold text-gray-400 sm:w-1/2 md:text-xl 2xl:w-1/3">
        <DaySelectButton
          text="1. dan"
          isSelected={dayIndex === 0}
          onClick={() => setDayIndex(0)}
          className={cn("rounded-l-md border-r-0 md:border-r-0")}
        />
        <DaySelectButton
          text="2. dan"
          isSelected={dayIndex === 1}
          onClick={() => setDayIndex(1)}
          className={cn("rounded-r-md", dayIndex === 0 && "border-l-white")}
        />
      </div>
      <h1 className="font-open-sans text-center text-3xl uppercase md:text-4xl xl:text-5xl">
        raspored za dan {dayIndex === 0 ? "7" : "8"}.6.2025.
      </h1>
      <div
        className="relative flex gap-x-5"
        style={{ height: `${timetableHeight}px` }}
      >
        <div className="hidden flex-col sm:flex">
          {times.map((time) => (
            <div
              key={time}
              style={{
                height: `${TIME_SLOT_HEIGHT}px`,
              }}
            >
              <div className="time font-open-sans flex -translate-y-1/2 items-center text-sm font-semibold text-gray-500 md:text-xl">
                {time}
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full">
          {times.map((time, index) => (
            <div
              key={time}
              className="absolute w-full border-t border-gray-600"
              style={{
                top: `${TIME_SLOT_HEIGHT * index}px`,
                height: `${TIME_SLOT_HEIGHT}px`,
                borderTopWidth: `${TIME_LINE_HEIGHT}px`,
              }}
            />
          ))}
          {events[dayIndex].map((event, i) => {
            const style = calculateEventStyle(event.start, event.end);
            return (
              <TimeSlotEntry
                key={`${event.start}-${event.type}`}
                event={event}
                style={style}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
