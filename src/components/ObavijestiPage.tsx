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
    <div className="mx-auto flex min-h-screen flex-col justify-between space-y-10 pb-10 md:max-w-2/3">
      <div className="">
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
