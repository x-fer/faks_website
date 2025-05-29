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
        "absolute flex flex-col justify-between rounded-md border-2 px-2 py-1.5 inset-shadow-[0_0_50px_5px] md:border-3 min-h-[70px] overflow-hidden", // MODIFIED: Reduced padding px-4 py-3 to px-2 py-1.5, reduced min-h-[80px] to min-h-[70px]
        outerDivStyle,
        event.small && "py-0.5 rounded-sm min-h-[30px]", // MODIFIED: Adjusted padding py-0 to py-0.5, reduced min-h-[40px] to min-h-[30px]
      )}
      style={{ ...style }}
    >
      <p
        className={cn(
          "font-open-sans text-sm text-white-smoke line-clamp-2 md:text-base", // MODIFIED: Reduced font size text-md to text-sm, md:text-lg to md:text-base
          event.small && "md:text-sm line-clamp-1", // MODIFIED: Reduced font size md:text-lg to md:text-sm for small variant
        )}
      >
        {event.isTalk ? event.talkInfo.title : event.title}
      </p>
      {event.isTalk && !event.small && (
        <div className="flex items-center gap-1 mt-0.5"> {/* MODIFIED: Reduced margin-top mt-1 to mt-0.5 */}
          <User className="size-3 md:size-4 flex-shrink-0" color={icon.color} /> {/* MODIFIED: Reduced icon size size-4 to size-3, md:size-5 to md:size-4 */}
          <p className="font-open-sans overflow-hidden text-xs text-nowrap overflow-ellipsis text-gray-400 uppercase md:text-sm"> {/* MODIFIED: Reduced font size text-sm to text-xs, md:text-lg to md:text-sm */}
            {formatSpeakers(event.talkInfo.speakers)}
          </p>
        </div>
      )}
    </div>
  );
}