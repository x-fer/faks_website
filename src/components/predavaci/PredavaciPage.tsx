import Footer from "../Footer.js";

import events from "../../data/predavanja.js"
import PredavaciDeatilsCard from "./PredavacDetailsCard.js";


export default function PredavaciPage() {
  return (
    <div className="my-20 flex h-screen w-full flex-col gap-10 px-5 md:gap-16 lg:mx-auto xl:w-2/3">
      {events[0].filter(event => event.isTalk).map(event => (
        <PredavaciDeatilsCard event={event}/>
      ))}
      <Footer className="mt-20" />
    </div>
  );
}
