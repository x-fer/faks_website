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
    <div className="font-bold text-[#F5F5F5] text-lg text-center md:text-left">Kontaktirajte nas</div>
    <div className="flex flex-col items-center md:items-start gap-2">
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
    <div className="font-bold text-white-smoke text-lg text-center md:text-left">{title}</div>
    <ul className="flex flex-col items-center md:items-start gap-2">
      {links.map(({ link, linkText }) => (
        <a className="text-[#E0E0E0]" href={link}>
          {linkText}
        </a>
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
  <div className="w-full flex flex-col gap-10 items-center justify-between">
    <div
      className="flex flex-col items-center md:items-start md:flex-row md:justify-between w-full gap-5"
    >
      <img src="/faks_small.svg" />

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
      <img src="/heart.svg" className="w-6 inline mx-2" />
      <span className="text-[#8A8A8A]">by FER students</span>
    </div>
  </div>
)
export default Footer