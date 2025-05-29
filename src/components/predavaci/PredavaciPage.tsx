import Footer from "../Footer.js";

import events from "../../data/predavanja.js";
import PredavaciDeatilsCard from "./PredavacDetailsCard.js";

export default function PredavaciPage() {
  return (
    <div className="my-20 flex h-screen w-full flex-col gap-10 px-5 md:gap-16 lg:mx-auto xl:w-2/3">
      {events[0]
        .filter((event) => event.isTalk)
        .sort((a, z) => {
          const aTalk = a.talkInfo;
          const zTalk = z.talkInfo;

          // 1. Keynote first
          if (aTalk.type === "keynote" && zTalk.type !== "keynote") return -1;
          if (aTalk.type !== "keynote" && zTalk.type === "keynote") return 1;

          // 2. Sort by start time string (HH:mm compares lexicographically correctly) // 2. Sort by start time (assuming ISO strings)
          if (a.startTime < z.startTime) return -1;
          if (a.startTime > z.startTime) return 1;

          // 3. If start times are equal, tech talks first
          if (aTalk.type === "tech" && zTalk.type !== "tech") return -1;
          if (aTalk.type !== "tech" && zTalk.type === "tech") return 1;

          return 0; // otherwise equal
        })
        .map((event) => (
          <PredavaciDeatilsCard event={event} />
        ))}
      <Footer className="mt-20" />
    </div>
  );
}
