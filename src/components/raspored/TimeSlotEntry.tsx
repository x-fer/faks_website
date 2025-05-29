import { User } from "lucide-react";
import { cn } from "@src/assets/lib/utils";
import type { EventInfo } from "@src/data/predavanja";

type Props = {
  event: EventInfo;
  style: React.CSSProperties;
};

// Define a mapping of event types to their corresponding styles
const eventStyles = {
  tech: {
    outerDiv:
      "left-5 w-5/12 bg-tech-fill border-tech-stroke inset-shadow-tech-stroke/15",
    icon: {
      color: "var(--color-tech-stroke)",
    },
  },
  policy: {
    outerDiv:
      "right-5 w-5/12 bg-policy-fill border-policy-stroke inset-shadow-policy-stroke/15",
    icon: {
      color: "var(--color-policy-stroke)",
    },
  },
  keynote: {
    outerDiv:
      "inset-x-5 bg-keynote-fill border-keynote-stroke inset-shadow-keynote-stroke/15",
    icon: {
      color: "var(--color-keynote-stroke)",
    },
  },
  neutral: {
    outerDiv:
      "inset-x-5 bg-neutral-fill border-neutral-stroke inset-shadow-neutral-stroke/15",
    icon: {
      color: "var(--color-neutral-stroke)",
    },
  },
};

// Function to get styles based on event type
const getEventStyles = (event: EventInfo) => {
  if (!event.isTalk) return eventStyles["neutral"];
  return eventStyles[event.talkInfo.type];
};

export default function TimeSlotEntry({ event, style }: Props) {
  const { outerDiv: outerDivStyle, icon } = getEventStyles(event);

  // Helper function to format speakers names
  const formatSpeakers = (speakers?: Array<{ name: string; title?: string }>) => {
    if (!speakers || speakers.length === 0) return "UNKNOWN";
    if (speakers.length === 1) return speakers[0].name;
    return speakers.map(speaker => speaker.name).join(", ");
  };

  return (
    <div
      className={cn(
        "absolute flex flex-col justify-between rounded-md border-2 px-1.5 py-1 inset-shadow-[0_0_50px_5px] md:border-3 overflow-hidden md:px-2 md:py-1.5", // MODIFIED: Base padding reduced to px-1.5 py-1. Restored md: padding slightly. Removed min-h for default.
        outerDivStyle,
        event.small && "py-0.5 px-1 rounded-sm min-h-[28px]", // MODIFIED: Adjusted padding for small, reduced min-h further.
      )}
      style={{ ...style }}
    >
      <p
        className={cn(
          "font-open-sans text-xs text-white-smoke line-clamp-3 sm:text-sm md:text-base md:line-clamp-2", // MODIFIED: Base font to text-xs, line-clamp-3 for mobile. sm:text-sm. md:line-clamp-2
          event.small && "text-xs md:text-sm line-clamp-1", // MODIFIED: Ensured small is also text-xs base, md:text-sm. line-clamp-1 for small.
        )}
      >
        {event.isTalk ? event.talkInfo.title : event.title}
      </p>
      {event.isTalk && !event.small && (
        <div className="flex items-center gap-0.5 mt-0.5"> {/* MODIFIED: Reduced gap to gap-0.5 */}
          <User className="size-3 md:size-4 flex-shrink-0" color={icon.color} />
          <p className="font-open-sans overflow-hidden text-[11px] text-nowrap overflow-ellipsis text-gray-400 uppercase sm:text-xs md:text-sm"> {/* MODIFIED: Base speaker font to text-[11px] (custom), sm:text-xs, md:text-sm */}
            {formatSpeakers(event.talkInfo.speakers)}
          </p>
        </div>
      )}
    </div>
  );
}