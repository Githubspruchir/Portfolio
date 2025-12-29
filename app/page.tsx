import Section from "@/components/Section";
import FlipCard from "@/components/FlipCard";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { research } from "@/data/research";
import { certifications } from "@/data/certifications";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-zinc-100 px-6">
      {/* HERO */}
      <section className="max-w-6xl mx-auto py-28">
        <h1 className="text-6xl font-bold tracking-tight">Ruchir S P</h1>
        <p className="mt-5 text-xl text-zinc-400">
          Graduate Engineer Trainee @ Mercedes-Benz · Agentic AI · Backend & ML
        </p>
        <p className="mt-6 text-zinc-500 max-w-2xl">
          I build scalable backend systems and intelligent AI agents, combining
          industry experience with applied ML and research-driven thinking.
        </p>
      </section>

      <Section title="Experience">
        {experience.map((e) => (
          <FlipCard key={e.title} front={e.front} back={e.back} />
        ))}
      </Section>

      <Section title="Projects">
        {projects.map((p) => (
          <FlipCard key={p.title} front={p.front} back={p.back} />
        ))}
      </Section>

      <Section title="Research">
        {research.map((r) => (
          <FlipCard key={r.title} front={r.front} back={r.back} />
        ))}
      </Section>

      <Section title="Certifications">
        {certifications.map((c) => (
          <FlipCard key={c.title} front={c.front} back={c.back} />
        ))}
      </Section>

      <footer className="text-center py-16 text-zinc-500 text-sm">
        © {new Date().getFullYear()} Ruchir S P
      </footer>
    </main>
  );
}
