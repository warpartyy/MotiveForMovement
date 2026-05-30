import Link from "next/link";
import { siteNavigation } from "@/lib/site-navigation";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Motive For Movement</h3>

          <p>
            Developing software, resources, and operational tools that
            help organizations and communities move forward.
          </p>
        </div>

        <div className="footer-section">
          <h4>Site</h4>

          {siteNavigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="footer-link"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-section">
          <h4>Products</h4>

          {siteNavigation.products.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-section">
          <h4>Legal</h4>

          {siteNavigation.legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="footer-link"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Motive For Movement. All rights reserved.
      </div>
    </footer>
  );
}