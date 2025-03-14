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
      <a href={`mailto:${props.email}`} className="text-[#E0E0E0]">
        email: {props.email}
      </a>
      <a
        href={`tel:${props.telephoneNumber.replace(" ", "")}`}
        className="text-[#E0E0E0]"
      >
        telefon: {props.telephoneNumber}
      </a>
      <div className="text-[#E0E0E0]">adresa: {props.address}</div>
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
          <a className="text-[#E0E0E0]" href={link}>
            {linkText}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const exploreLinks: LinkInfo[] = [
  { link: "#predavanja", linkText: "predavanja" },
  { link: "#ctf-natjecanje", linkText: "CTF natjecanje" },
  { link: "#flash-talks", linkText: "flash talks" },
  { link: "#panel-rasprave", linkText: "panel rasprave" },
  { link: "#mingle", linkText: "mingle" },
  { link: "#faq", linkText: "FAQ" },
];

const socialLinks: LinkInfo[] = [
  { link: "#linkedin", linkText: "linkedin" },
  { link: "#facebook", linkText: "facebook" },
  { link: "#instagram", linkText: "instagram" },
  { link: "#tiktok", linkText: "tiktok" },
  { link: "#bluesky", linkText: "bluesky" },
];

const aboutLinks: LinkInfo[] = [
  { link: "#organizacija", linkText: "organizacija" },
  { link: "#erste-cyber-guardian", linkText: "Erste Cyber guardian" },
  { link: "#fer", linkText: "FER" },
];

const Footer = () => (
  <div className="flex w-full flex-col items-center justify-between gap-10">
    <div className="flex w-full flex-col items-center gap-5 md:flex-row md:items-start md:justify-between">
      <img
        src="/faks_small.svg"
        className={"flex-1"}
        alt={"small logo of the conference"}
      />

      <ContactInfo
        email="faks@fer.hr"
        telephoneNumber="+385 1 6129 999"
        address="Unska 3, Zagreb"
      />
      <LinksSection title="Istrazite" links={exploreLinks} />
      <LinksSection title="Povezite se s nama" links={socialLinks} />
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
