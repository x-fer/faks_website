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
    
    // If only one speaker, return their name
    if (speakers.length === 1) return speakers[0].name;
    
    // If multiple speakers, join with comma
    return speakers.map(speaker => speaker.name).join(", ");
  };

  return (
    <div
      className={cn(
        "absolute flex flex-col justify-between rounded-md border-2 px-4 py-3 inset-shadow-[0_0_50px_5px] md:border-3 min-h-[80px] overflow-hidden",
        outerDivStyle,
        event.small && "py-0 rounded-sm min-h-[40px]",
      )}
      style={{ ...style }}
    >
      <p
        className={cn(
          "font-open-sans text-md text-white-smoke line-clamp-2 md:text-lg",
          event.small && "md:text-lg line-clamp-1",
        )}
      >
        {event.isTalk ? event.talkInfo.title : event.title}
      </p>
      {event.isTalk && !event.small && (
        <div className="flex items-center gap-1 mt-1">
          <User className="size-4 md:size-5 flex-shrink-0" color={icon.color} />
          <p className="font-open-sans overflow-hidden text-sm text-nowrap overflow-ellipsis text-gray-400 uppercase md:text-lg">
            {formatSpeakers(event.talkInfo.speakers)}
          </p>
        </div>
      )}
    </div>
  );
}