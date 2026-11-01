import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type HeaderProps = { logo: string; bookingUrl: string };

export function Header({ logo, bookingUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3.5">
        <a href="#top" className="font-head text-[19px] font-extrabold tracking-tight no-underline sm:text-[22px]">
          {logo}
          <span className="text-lime">.</span>
        </a>
        <Button href={bookingUrl} size="sm" className="sm:hidden">
          Book a call
        </Button>
        <Button href={bookingUrl} className="hidden sm:inline-flex">
          Book a call
        </Button>
      </Container>
    </header>
  );
}