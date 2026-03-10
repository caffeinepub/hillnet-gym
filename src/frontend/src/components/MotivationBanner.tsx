import { useEffect, useRef } from "react";

const WHATSAPP_LINK =
  "https://wa.me/919460051155?text=Hi%2C%20I%20want%20to%20start%20my%20fitness%20journey%20at%20HillNet%20Gym";

export function MotivationBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const els = section.querySelectorAll(".animate-in-viewport");
            let i = 0;
            for (const el of els) {
              const idx = i;
              setTimeout(() => el.classList.add("visible"), idx * 150);
              i++;
            }
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: "500px" }}
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/motivation-banner.dim_1920x900.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Neon accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      {/* Green line accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 min-h-[500px]">
        {/* Decorative text above */}
        <div className="animate-in-viewport text-neon text-xs font-bold tracking-[0.5em] uppercase mb-6 opacity-80">
          Mindset &bull; Discipline &bull; Strength
        </div>

        {/* Main headline */}
        <h2 className="animate-in-viewport font-display font-black text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight max-w-4xl mb-6">
          Being Strong is{" "}
          <span className="gradient-text-neon shadow-neon-text">
            a Lifestyle.
          </span>
        </h2>

        {/* Subtext */}
        <p className="animate-in-viewport text-white/65 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Every rep, every drop of sweat brings you closer to the best version
          of yourself. Your transformation starts at HillNet Gym.
        </p>

        {/* CTA */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-in-viewport btn-neon px-10 py-4 rounded text-base inline-block"
        >
          Start Your Journey →
        </a>
      </div>
    </section>
  );
}
