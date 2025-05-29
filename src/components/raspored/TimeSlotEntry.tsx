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
        "absolute flex flex-col justify-between rounded-md border-2 px-3 py-2 inset-shadow-[0_0_50px_5px] md:border-3 overflow-hidden md:px-4 md:py-2",
        outerDivStyle,
        event.small && "rounded-sm min-h-[28px]",
      )}
      style={{ ...style }}
    >
      <p
        className={cn(
          "font-open-sans font-medium text-xs text-white-smoke line-clamp-3 sm:text-base",
          event.small && "line-clamp-1 text-gray-300 italic",
        )}
      >
        {event.isTalk ? event.talkInfo.title : event.title}
      </p>
      {event.isTalk && !event.small && (
        <div className="flex items-center gap-2">
          <User className="size-3 md:size-4 flex-shrink-0" color={icon.color} />
          <p className="font-open-sans overflow-hidden text-[11px] text-nowrap overflow-ellipsis text-gray-400 uppercase sm:text-xs md:text-sm">
            {formatSpeakers(event.talkInfo.speakers)}
          </p>
        </div>
      )}
    </div>
  );
}