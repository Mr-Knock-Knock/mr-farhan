import { Container } from "@/components/ui/Container";

export function Footer({ text }: { text: string }) {
  return (
    <footer className="py-8">
      <Container>
        <p className="pb-16 text-center text-sm text-muted sm:px-[72px] sm:pb-0">{text}</p>
      </Container>
    </footer>
  );
}