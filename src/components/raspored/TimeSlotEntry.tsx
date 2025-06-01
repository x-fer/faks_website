import { User } from "lucide-react";
import { cn } from "@src/assets/lib/utils";
import type { EventInfo } from "@src/data/predavanja";

type Props = {
  event: EventInfo;
  style: React.CSSProperties;
};

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

const getEventStyles = (event: EventInfo) => {
  if (!event.isTalk) return eventStyles["neutral"];
  return eventStyles[event.talkInfo.type];
};

export default function TimeSlotEntry({ event, style }: Props) {
  const { outerDiv: outerDivStyle, icon } = getEventStyles(event);

  const formatSpeakers = (
    speakers?: Array<{ name: string; title?: string }>
  ) => {
    if (!speakers || speakers.length === 0) return "UNKNOWN";
    if (speakers.length === 1) return speakers[0].name;
    return speakers.map((speaker) => speaker.name).join(", ");
  };

  const link = `/predavaci/#${event.talkInfo?.title
    .toLocaleLowerCase()
    .replaceAll(" ", "-")}`;

  const content = (
    <div
      className={cn(
        "absolute flex items-start flex-col overflow-hidden rounded-md border-2 px-3 py-2 inset-shadow-[0_0_50px_5px] md:border-3 md:px-4 md:py-2",
        outerDivStyle,
        event.small && "min-h-[28px] rounded-sm",
        event.isTalk ? "justify-between cursor-pointer" : "justify-start"
      )}
      style={{ ...style }}
    >
      <p
        className={cn(
          "font-open-sans text-white-smoke line-clamp-3 text-xs font-medium sm:text-base",
          event.small && "line-clamp-1 text-gray-300 italic"
        )}
      >
        {event.isTalk ? event.talkInfo.title : event.title}
      </p>

      {!event.isTalk && event.subtitle && (
        <p
          className={cn(
            "font-open-sans italic text-[15px] leading-tight text-gray-400",
            event.small ? "line-clamp-1" : "sm:text-xs"
          )}
        >
          {event.subtitle}
        </p>
      )}

      {event.isTalk && !event.small && (
        <div className="flex items-center gap-2">
          <User className="size-3 flex-shrink-0 md:size-4" color={icon.color} />
          <p className="font-open-sans overflow-hidden text-[11px] text-nowrap overflow-ellipsis text-gray-400 uppercase sm:text-xs md:text-sm">
            {formatSpeakers(event.talkInfo.speakers)}
          </p>
        </div>
      )}
    </div>
  );

  return event.isTalk ? (
    <a href={link} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
