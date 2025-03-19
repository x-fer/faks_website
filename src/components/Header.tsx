import { Menu, XIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Description } from "@radix-ui/react-dialog";
import { useState } from "react";

const links = [
  { title: "početna", link: "/" },
  { title: "info", link: "/info" },
  { title: "raspored", link: "/raspored" },
  { title: "predavači", link: "/predavaci" },
  { title: "obavijesti", link: "/obavijesti" },
  { title: "CTF", link: "/ctf" },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-linear-to-b from-black to-transparent md:py-5">
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
                  className="text-white-smoke text-lg transition-colors hover:text-white"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="font-open-sans z-10 container mx-auto hidden items-center gap-8 text-xl font-semibold text-[#AAAAAA] md:flex xl:gap-24">
        <a href="/">
          <img className="size-30" src="/logo.svg" alt="logo" />
        </a>
        <div className="flex gap-8 xl:gap-24">
          {links.slice(1).map((link) => (
            <a key={link.title} href={link.link}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
