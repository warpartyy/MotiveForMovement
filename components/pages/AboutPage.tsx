import { aboutContent } from "@/lib/content/about";

export function AboutPage() {
  return (
    <main className="container">
      <h1>{aboutContent.title}</h1>

      <p>{aboutContent.mission}</p>

      <p>{aboutContent.vision}</p>

      <p>{aboutContent.history}</p>
    </main>
  );
}