import { cn } from "@src/assets/lib/utils";

type LinkInfo = {
  link: string;
  linkText: string;
};

type LinksSectionProps = {
  title: string;
  links: LinkInfo[];
};

type ContactInfoProps = {
  email: string;
  telephoneNumber: string;
  address: string;
};

const ContactInfo = (props: ContactInfoProps) => (
  <div className="flex flex-1 flex-col gap-4">
    <div className="text-center text-lg font-bold text-[#F5F5F5] md:text-left">
      Kontaktirajte nas
    </div>
    <div className="flex flex-col items-center gap-2 md:items-start">
      <a
        href={`mailto:${props.email}`}
        className="hover:text-attack-darker-red text-[#E0E0E0]"
      >
        Email: {props.email}
      </a>
      <a
        href={`tel:${props.telephoneNumber.replace(" ", "")}`}
        className="hover:text-attack-darker-red text-[#E0E0E0]"
      >
        Telefon: {props.telephoneNumber}
      </a>
      <div className="hover:text-attack-darker-red text-[#E0E0E0]">
        Adresa: {props.address}
      </div>
    </div>
  </div>
);

const LinksSection = ({ title, links }: LinksSectionProps) => (
  <div className="flex flex-1 flex-col gap-4">
    <div className="text-white-smoke text-center text-lg font-bold md:text-left">
      {title}
    </div>
    <ul className="flex flex-col items-center gap-2 md:items-start">
      {links.map(({ link, linkText }) => (
        <li>
          <a
            className="hover:text-attack-darker-red text-[#E0E0E0]"
            href={link}
          >
            {linkText}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const exploreLinks: LinkInfo[] = [
  { link: "/info/#predavanja", linkText: "Predavanja" },
  { link: "/info/#ctf-natjecanje", linkText: "CTF natjecanje" },
  { link: "/info/#flash-talks", linkText: "Flash Talks" },
  { link: "/info/#panel-rasprave", linkText: "Panel Rasprave" },
  { link: "/info/#mingle", linkText: "Mingle" },
  //{ link: "#faq", linkText: "FAQ" },
];

const socialLinks: LinkInfo[] = [
  {
    link: "https://www.linkedin.com/company/fakskonferencija",
    linkText: "Linkedin",
  },
  { link: "https://www.facebook.com/share/19gyUXJ8fJ/", linkText: "Facebook" },
  {
    link: "https://www.instagram.com/faks.konferencija",
    linkText: "Instagram",
  },
  {
    link: "https://www.tiktok.com/@faks_konferencija?lang=en",
    linkText: "Tiktok",
  },
  {
    link: "https://x.com/FAKS_Konfa?t=Xrfi2GZYUaNJayfSgIs-KQ&s=09",
    linkText: "Twitter (X)",
  },
];

const aboutLinks: LinkInfo[] = [
  { link: "/info/#organizacija", linkText: "Organizacija" },
  { link: "/info/#erste-cyber-guardian", linkText: "Erste Cyber Guardian" },
  { link: "https://www.fer.unizg.hr/", linkText: "FER" },
];

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => (
  <div
    className={cn(
      "flex w-full flex-col items-center justify-between gap-10",
      className,
    )}
  >
    <div className="flex w-full flex-col items-center gap-5 md:flex-row md:items-start md:justify-between">
      <img
        src="/faks_small.svg"
        className={"flex-1"}
        alt={"small logo of the conference"}
      />

      <ContactInfo
        email="faks.konferencija@fer.hr"
        telephoneNumber="+385 1 6129 999"
        address="Unska 3, Zagreb"
      />
      <LinksSection title="Instražite" links={exploreLinks} />
      <LinksSection title="Povežite se s nama" links={socialLinks} />
      <LinksSection title="O nama i partnerima" links={aboutLinks} />
    </div>

    <div className="flex items-end justify-center">
      <span className="text-[#8A8A8A]">made with</span>
      <img src="/heart.svg" className="mx-2 inline w-6" />
      <span className="text-[#8A8A8A]">by FER students</span>
    </div>
  </div>
);
export default Footer;
