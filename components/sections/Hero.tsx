import Link from "next/link";
import { homeContent } from "@/lib/content/home";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          {homeContent.title}
        </h1>

        <p className="hero-subtitle">
          {homeContent.subtitle}
        </p>

        <div className="hero-actions">
          <Link
            href={homeContent.primaryCta.href}
            className="button button-primary"
          >
            {homeContent.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}