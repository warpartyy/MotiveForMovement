export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Motive For Movement</h3>
          <p>
            Connecting communities to trusted resources and building
            sustainable momentum for impact.
          </p>
        </div>

        <div className="footer-links">
          <a href="https://resources.motiveformovement.com">
            Resource Directory
          </a>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Motive For Movement. All rights reserved.
        </div>
      </div>
    </footer>
  );
}