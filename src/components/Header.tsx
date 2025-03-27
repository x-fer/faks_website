import { Menu, XIcon, ExternalLink } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "../lib/utils";

const links = [
  { title: "početna", link: "/" },
  { title: "raspored", link: "/raspored" },
  { title: "info", link: "/info" },
  { title: "predavači", link: "/predavaci" },
  { title: "obavijesti", link: "/obavijesti" },
  { title: "CTF", link: "https://faks.ctf.hr/", icon: ExternalLink },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const isActivePage = (link: string) => window.location.pathname === link;

  // MOBILE
  return (
    <div className="z-50 w-full bg-linear-to-b from-black to-transparent md:py-5">
      <div className="z-10 mx-10 flex items-center justify-between md:hidden">
        <a href="/">
          <img className="size-20" src="/logo.svg" alt="logo" />
        </a>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger className="md:hidden">
            <Menu
              size="30"
              className="text-white-smoke transition-colors hover:text-white"
            />
          </SheetTrigger>
          <SheetContent className="border-0 bg-black p-6" showClose={false}>
            <SheetHeader className="mb-5 flex-row items-center justify-between p-0 text-white">
              <SheetTitle className="text-white-smoke w-min">
                Navigacija
              </SheetTitle>
              <XIcon size="30" onClick={() => setIsSheetOpen(false)} />
            </SheetHeader>
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.link}
                  className={cn(
                    "flex items-center gap-2 text-lg text-gray-300 transition-colors hover:text-white",
                    isActivePage(link.link) && "font-semibold text-white",
                  )}
                >
                  {link.title}
                  {link.icon && <link.icon className="size-5" />}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="font-open-sans z-10 container mx-auto hidden items-center gap-8 text-xl font-semibold text-[#AAAAAA] md:flex xl:gap-24">
        <a href="/">
          <img
            className="max-h-15 p-3"
            src="/main_logo_transparent.png"
            alt="logo"
          />
        </a>
        <div className="flex gap-8 xl:gap-24">
          {links.slice(1).map((link) => (
            <a
              key={link.title}
              href={link.link}
              className={cn(
                "hover:text-white-smoke flex items-center gap-2 transition-colors",
                isActivePage(link.link) && "text-white hover:text-gray-300",
              )}
            >
              {link.title}
              {link.icon && <link.icon className="size-6" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
