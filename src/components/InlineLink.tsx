import { cn } from "@src/assets/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const linkVariants = cva("hover:underline transition-colors", {
  variants: {
    variant: {
      default: "text-purple-500",
      attack: "text-attack-red",
      defense: "text-defense-lighter-blue",
    },
  },
  defaultVariants: {
    variant: "defense",
  },
});

type Props = VariantProps<typeof linkVariants> & {
  className?: string;
  children: React.ReactNode;
  href: string;
  samePage?: boolean;
};

export default function InlineLink({
  className,
  children,
  href,
  samePage,
  variant,
}: Props) {
  return (
    <a
      href={href}
      className={cn(linkVariants({ variant }), className)}
      target={samePage ? "_self" : "_blank"}
      rel={!samePage ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
