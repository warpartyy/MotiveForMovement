import Link from "next/link";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="navbar-brand">
          Motive For Movement
        </Link>

        <Link
          href="https://resources.motiveformovement.com"
          className="navbar-link"
        >
          Resources
        </Link>
      </div>
    </header>
  );
}