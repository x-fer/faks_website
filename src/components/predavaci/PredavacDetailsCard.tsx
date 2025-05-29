import type { TalkEvent } from "@/data/predavanja";
import { cn } from "@/lib/utils";

type Props = {
  event: TalkEvent;
};

const eventStyles = {
  tech: "bg-tech-fill border-tech-stroke inset-shadow-tech-stroke/15",
  policy: "bg-policy-fill border-policy-stroke inset-shadow-policy-stroke/15",
  keynote: "bg-keynote-fill border-keynote-stroke inset-shadow-keynote-stroke/15",
};

export default function PredavaciDetailsCard(props: Props) {
  const talkInfo = props.event.talkInfo;
  const speakers = talkInfo.speakers ?? [];
  
  // Check if any speaker has a biography
  const hasSpeakerBiographies = speakers.some(speaker => speaker.biography?.trim());

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
      <div className="mx-auto flex flex-col items-center gap-5 lg:mx-0">
{(() => {
          // Check if any speaker has an image
          const hasSpeakerImages = speakers.some(s => s.image?.trim());
          
          return (
            <>
              {speakers.map((speaker, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 min-w-[300px]">
                  {hasSpeakerImages ? (
                    // Show speaker image in circle if any speaker has an image
                    <>
                      <div className="h-64 w-64 rounded-full overflow-hidden">
                        {speaker.image ? (
                          <img
                            src={speaker.image}
                            alt={speaker.name ?? "Speaker"}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full bg-red-400" />
                        )}
                      </div>
                      <p className="font-nuito-sans text-center text-xl lg:text-2xl font-semibold text-[#D2D2D2] italic">
                        {speaker.name ?? "UNKNOWN"}
                      </p>
                    </>
                  ) : (
                    // Show logo above name in rectangle if no speaker images - SAME LARGE SIZE
                    <>
                      {talkInfo.logo && (
                        <div 
                          className="flex items-center justify-center rounded-lg overflow-hidden bg-white/5 border border-white/10" 
                          style={{height: '200px', width: '300px', minHeight: '200px', minWidth: '300px'}}
                        >
                          <img
                            src={talkInfo.logo}
                            alt="Talk logo"
                            className="max-h-full max-w-full object-contain"
                            style={{maxHeight: '180px', maxWidth: '280px'}}
                          />
                        </div>
                      )}
                      <p className="font-nuito-sans text-center text-xl lg:text-2xl font-semibold text-[#D2D2D2] italic">
                        {speaker.name ?? "UNKNOWN"}
                      </p>
                    </>
                  )}
                </div>
              ))}
              
              {/* Show logo below the last speaker if speakers have images */}
              {hasSpeakerImages && talkInfo.logo && (
                <div 
                  className="flex items-center justify-center rounded-lg overflow-hidden bg-white/5 border border-white/10" 
                  style={{height: '200px', width: '300px', minHeight: '200px', minWidth: '300px'}}
                >
                  <img
                    src={talkInfo.logo}
                    alt="Talk logo"
                    className="max-h-full max-w-full object-contain"
                    style={{maxHeight: '180px', maxWidth: '280px'}}
                  />
                </div>
              )}
            </>
          );
        })()}
      </div>
      
      <div className="text-white-smoke space-y-5">
        <div className="flex flex-col-reverse lg:flex-row gap-5">
          <div
            className={cn(
              "font-open-sans h-min mx-auto w-min lg:mx-0 rounded-md border-2 text-center px-10 py-1 font-semibold text-[#BCBCBC] uppercase text-md",
              eventStyles[talkInfo.type],
            )}
          >
            {talkInfo.type}
          </div>
          <h1 className="font-nuito-sans text-xl lg:text-2xl font-bold">
            {talkInfo.title}
          </h1>
        </div>
        
        <div className="font-open-sans text-white-smoke w-full space-y-10 rounded-xl border-2 border-[#4A4A4A] bg-black px-10 py-8 lg:px-16 lg:py-8">
{hasSpeakerBiographies && (
            <div className="space-y-5">
              <p className="text-defense-lighter-blue font-roboto text-lg font-bold">
                {(() => {
                  if (speakers.length > 1) {
                    return "O PREDAVAČIMA";
                  } else {
                    const speaker = speakers[0];
                    if (speaker?.gender === "female") {
                      return "O PREDAVAČICI";
                    } else {
                      return "O PREDAVAČU";
                    }
                  }
                })()}
              </p>
              {speakers.map((speaker, idx) =>
                speaker.biography ? (
                  <p
                    key={idx}
                    className="font-nuito-sans text-lg text-[#C7C7C7] italic whitespace-pre-line"
                  >
                    {speaker.biography}
                  </p>
                ) : null
              )}
            </div>
          )}
          
          <div className="space-y-4">
            <p className="text-attack-red font-roboto text-lg font-bold">
              O PREDAVANJU
            </p>
            <p className="font-nuito-sans text-white-smoke text-lg whitespace-pre-line">
              {talkInfo.description}
            </p>
          </div>
          
          <p className="font-nuito-sans text-white-smoke mt-5 text-lg font-semibold">
            7. 6. 2025 u {props.event.startTime}
          </p>
        </div>
      </div>
    </div>
  );
}