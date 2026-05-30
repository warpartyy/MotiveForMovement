import { contactContent } from "@/lib/content/contact";

export function ContactPage() {
  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact</h1>

          <p>
            {contactContent.description}
          </p>
        </div>

        <div className="contact-card">
          <h2>Email</h2>

          <a
            href={`mailto:${contactContent.email}`}
            className="contact-email"
          >
            {contactContent.email}
          </a>
        </div>
      </div>
    </main>
  );
}