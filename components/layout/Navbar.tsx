import Link from "next/link";
import { siteNavigation } from "@/lib/site-navigation";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="navbar-brand">
          Motive For Movement
        </Link>

        <nav className="navbar-nav">
          {siteNavigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="navbar-link"
            >
              {item.label}
            </Link>
          ))}

          {siteNavigation.products.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}