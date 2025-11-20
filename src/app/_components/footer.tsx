import Container from "@/app/_components/container";
import { GITHUB_URL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-lime-100 border-t border-lime-200 dark:bg-lime-900 dark:border-lime-800">
      <Container>
        <div className="py-8 text-sm text-neutral-800 dark:text-neutral-200 grid grid-cols-3 items-center">
          <div />
          <div className="justify-self-center text-center select-none">© {year} Ji Seung Ryul</div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-self-end inline-flex items-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold text-black no-underline shadow-sm transition-colors hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
            aria-label="Open GitHub profile"
          >
            GitHub ↗
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
