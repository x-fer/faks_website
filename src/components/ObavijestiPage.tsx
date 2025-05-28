import Footer from "./Footer";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type React from "react";
import InlineLink from "./InlineLink";

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

type NewsType = {
  title: string;
  contents: React.ReactNode;
  timePosted: dayjs.Dayjs;
};

const NEWS: NewsType[] = [
  {
    title: "Prijavite svoj flash talk!",
    contents: (
      <p>
        Link na prijave je dostupan{" "}
        <InlineLink variant="attack" href="https://docs.google.com/forms/d/e/1FAIpQLSfyre-JnrLKU_fyHokbIOR772-Vm10dJuAPjkCE19X3_-X1Zw/viewform">
          ovdje
        </InlineLink>
        .
      </p>
    ),
    timePosted: dayjs("2025-05-19T12:00:00"), //
  },
  {
    title: "Otvorene su prijave za CTF natjecanje",
    contents: (
      <p>
        Prijave za CTF natjecanje su službeno otvorene.
        <br />
        <br />
        Više o CTF natjecanju možete pročitati{" "}
        <InlineLink variant="defense" href="/info/#ctf-natjecanje">
          ovdje
        </InlineLink>
        .
        <br />
        <br />A link na prijave je dostupan{" "}
        <InlineLink variant="attack" href="https://forms.gle/ZwmybUECgv43tWGR6">
          ovdje
        </InlineLink>
        .
      </p>
    ),
    timePosted: dayjs("2025-04-01T12:00:00"), //
  },
  {
    title: "Dobrodošli na FAKS web stranicu!",
    contents: "Ovo je službena stranica FAKS Konferencije!",
    timePosted: dayjs("2025-03-18T18:23:00"), //
  },
];

export default function ObavijestiPage() {
  return (
    <div className="my-10 flex h-screen w-full flex-col gap-10 px-5 md:gap-16 lg:mx-auto xl:w-2/3">
      <div className="grow space-y-10">
        {NEWS.map((newsInfo) => (
          <div className="font-open-sans text-white-smoke rounded-xl border-2 border-white bg-black p-10">
            <h1 className="mb-10 text-2xl font-bold">{newsInfo.title}</h1>
            <div className="font-open-sans text-xl">{newsInfo.contents}</div>
            <p className="mt-5 text-lg font-semibold text-gray-500">
              {newsInfo.timePosted.fromNow()}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
