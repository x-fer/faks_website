import Footer from "./Footer";

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs-timezone-iana-plugin';
import utc from "dayjs/plugin/utc"

dayjs.extend(timezone)
// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);
dayjs.extend(timezone)
dayjs.extend(utc)

const NEWS = [
    {
        title: "Dobrodošli na FAKS web stranicu!",
        text: "Ovo je službena stranica FAKS Konferencije!",
        timePosted: dayjs("2025-03-18T18:23:00").tz("Europe/Zagreb") //
    }
]

export default function ObavijestiPage() {
    return (
        <div className="mx-auto md:max-w-2/3 space-y-10 min-h-screen flex flex-col justify-between pb-10">
            <div className="">
                {NEWS.map((newsInfo) => (
                    <div className="bg-black border-2 border-white p-10 space-y-4 font-open-sans rounded-xl">
                        <h1 className="text-2xl">{newsInfo.title}</h1>
                        <p className="text-lg">{newsInfo.text}</p>
                        <p className="text-gray-500 font-semibold text-lg">
                            {newsInfo.timePosted.fromNow()}
                        </p>
                    </div>
                ))}</div>
            <Footer />
        </div>
    )
}

