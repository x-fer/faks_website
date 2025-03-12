import { User } from "lucide-react";
import { cn } from "@src/assets/lib/utils";
import type { EventInfo } from "../RasporedPage";

type Props = {
    event: EventInfo
    style: React.CSSProperties,
}

// Define a mapping of event types to their corresponding styles
const eventStyles = {
   tech: {
        outerDiv: "left-5 w-5/12 bg-tech-fill border-tech-stroke inset-shadow-tech-stroke/15",
        icon: {
            color: 'var(--color-tech-stroke)',
        },
    },
    policy: {
        outerDiv: "right-5 w-5/12 bg-policy-fill border-policy-stroke inset-shadow-policy-stroke/15",
        icon: {
            color: 'var(--color-policy-stroke)',
        },
    },
    keynote: {
        outerDiv: "inset-x-5 bg-keynote-fill border-keynote-stroke inset-shadow-keynote-stroke/15",
        icon: {
            color: 'var(--color-keynote-stroke)',
        },
    },
    neutral: {
        outerDiv: "inset-x-5 bg-neutral-fill border-neutral-stroke inset-shadow-neutral-stroke/15",
        icon: {
            color: 'var(--color-neutral-stroke)',
        },
    },
};

// Function to get styles based on event type
const getEventStyles = (eventType: EventInfo["type"]) => {
    return eventStyles[eventType] || {};
};

export default function TimeSlotEntry({ event, style }: Props) {
    const { outerDiv: outerDivStyle, icon } = getEventStyles(event.type);

    return (
        <div className={cn(
            "rounded-xl absolute px-4 py-3 border-2 md:border-3 inset-shadow-[0_0_50px_5px] flex flex-col justify-between",
            outerDivStyle
        )}
            style={{ ...style }}
        >
            <p className="font-open-sans text-md md:text-xl text-white-smoke">{event.title}</p>
            {event.speaker &&
                <div className="flex items-center gap-1">
                    <User className="size-4 md:size-5" color={icon.color}/>
                    <p className="font-open-sans uppercase text-xs md:text-lg text-gray-400">{event.speaker}</p>
                </div>
            }
        </div>
    )
}

