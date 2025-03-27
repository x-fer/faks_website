import Footer from "./Footer";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs-timezone-iana-plugin";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);

const NEWS = [
  {
    title: "Dobrodošli na FAKS web stranicu!",
    text: "Ovo je službena stranica FAKS Konferencije!",
    timePosted: dayjs("2025-03-18T18:23:00").tz("Europe/Zagreb"), //
  },
];

export default function ObavijestiPage() {
  return (
    <div className="my-10 flex h-screen w-full flex-col gap-10 px-5 md:gap-16 lg:mx-auto xl:w-2/3">
      <div className="grow space-y-10">
        {NEWS.map((newsInfo) => (
          <div className="font-open-sans text-white-smoke space-y-4 rounded-xl border-2 border-white bg-black p-10">
            <h1 className="text-2xl">{newsInfo.title}</h1>
            <p className="text-lg">{newsInfo.text}</p>
            <p className="text-lg font-semibold text-gray-500">
              {newsInfo.timePosted.fromNow()}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
