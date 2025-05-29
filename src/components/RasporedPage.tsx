import "@styles/global.css";
import TimeSlotEntry from "./raspored/TimeSlotEntry";
import Footer from "./Footer";
import { useState } from "react";
import { cn } from "@src/assets/lib/utils";
import events from "../data/predavanja"

// Import or define the types based on your data structure
export type SpeakerType = {
  name: string;
  image: string;
  biography: string;
  gender: string;
  title: string;
};

export type TalkInfo = {
  title: string;
  description: string;
  speakers?: SpeakerType[];
  logo: string;
  type: "tech" | "policy" | "keynote";
};

type BaseEvent = {
  startTime: string;
  endTime: string;
  small?: boolean;
};

export type TalkEvent = BaseEvent & {
  isTalk: true;
  talkInfo: TalkInfo;
};

type NonTalkEvent = BaseEvent & {
  isTalk: false;
  title: string;
  talkInfo?: undefined;
};

export type Event = TalkEvent | NonTalkEvent;

const times: string[] = [];
const START_HOUR = 9;
const END_HOUR = 19;

const TIME_SLOT_SPACING = 120; // Height of each time slot in pixels
const TIME_LINE_HEIGHT = 3;

for (let hour = START_HOUR; hour < END_HOUR; hour++) {
  times.push(`${hour.toString().padStart(2, "0")}:00`);
  if (hour !== END_HOUR) {
    times.push(`${hour.toString().padStart(2, "0")}:30`);
  }
}

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
    (TIME_SLOT_SPACING * times.length);
  const height =
    ((endMinutes - startMinutes) / totalMinutes) *
      (TIME_SLOT_SPACING * times.length) +
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
  const timetableHeight = times.length * TIME_SLOT_SPACING;
  const [dayIndex, setDayIndex] = useState<number>(0);

  // Type the events array properly
  const dayEvents: Event[] = events[dayIndex];

  return (
    <div className="flex w-full flex-col gap-10 pl-1 pr-5 pb-10 md:px-5 md:gap-16 lg:mx-auto xl:w-2/3">
      <div className="text-md mt-20 flex w-2/3 self-center rounded-xl bg-black font-semibold text-gray-400 sm:w-1/2 md:text-xl 2xl:w-1/3">
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
      <h1 className="font-open-sans text-white-smoke text-center text-3xl uppercase md:text-4xl xl:text-5xl">
        raspored za dan {dayIndex === 0 ? "7" : "8"}.6.2025.
      </h1>
      <div
        className="relative flex gap-x-0 md:gap-x-5"
        style={{ height: `${timetableHeight}px` }}
      >
        <div className="flex-col sm:flex">
          {times.slice(0, -1).map((time) => (
            <div
              key={time}
              style={{
                height: `${TIME_SLOT_SPACING}px`,
              }}
            >
              <div className="time font-open-sans flex -translate-y-1/2 items-center text-xl font-semibold text-gray-500 -rotate-90 md:rotate-0">
                {time}
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full">
          {times.slice(0, -1).map((time, index) => (
            <div
              key={time}
              className="absolute w-full border-t border-gray-600"
              style={{
                top: `${TIME_SLOT_SPACING * index}px`,
                height: `${TIME_SLOT_SPACING}px`,
                borderTopWidth: `${TIME_LINE_HEIGHT}px`,
              }}
            />
          ))}
          {dayEvents.map((event, i) => {
            const style = calculateEventStyle(event.startTime, event.endTime);

            return (
              <TimeSlotEntry
                key={`${event.startTime}-${event.endTime}-${i}`}
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