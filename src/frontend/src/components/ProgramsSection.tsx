import { useEffect, useRef } from "react";

const programs = [
  {
    icon: "🔥",
    title: "Weight Loss Transformation",
    description:
      "Science-backed cardio and diet programs for sustainable fat loss. Achieve your ideal body weight with expert guidance.",
    tag: "Popular",
  },
  {
    icon: "💪",
    title: "Muscle Gain Training",
    description:
      "Progressive resistance training to build lean muscle mass. Structured programs for hypertrophy and strength.",
    tag: null,
  },
  {
    icon: "🏋️",
    title: "Personal Training",
    description:
      "1-on-1 sessions with certified trainers tailored to your goals. Maximum results with personalized attention.",
    tag: "Premium",
  },
  {
    icon: "⚡",
    title: "Functional Training",
    description:
      "Improve strength, mobility and endurance with functional workouts. Real-world fitness for everyday performance.",
    tag: null,
  },
  {
    icon: "🎓",
    title: "Student Fitness Plans",
    description:
      "Affordable fitness plans specially designed for Kota students. Flexible timings and budget-friendly pricing.",
    tag: "Students",
  },
];

export function ProgramsSection() {
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
              setTimeout(() => el.classList.add("visible"), idx * 100);
              i++;
            }
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gym-dark overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-in-viewport text-center mb-16">
          <span className="text-xs font-bold text-neon tracking-[0.3em] uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 font-display">
            Our Training <span className="gradient-text-neon">Programs</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Tailored fitness programs for every goal. From beginner to advanced,
            we have the right plan for you.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="animate-in-viewport relative group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative glass rounded-xl p-7 border border-neon/10 hover:border-neon/40 transition-all duration-300 hover:shadow-neon-sm hover:-translate-y-1 h-full flex flex-col">
                {/* Top neon border line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Tag badge */}
                {program.tag && (
                  <span className="absolute top-4 right-4 text-xs font-bold bg-neon/10 text-neon border border-neon/30 rounded-full px-2.5 py-0.5 tracking-wide uppercase">
                    {program.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110 w-14 h-14 flex items-center justify-center bg-neon/5 rounded-xl border border-neon/15">
                  {program.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 font-display leading-tight">
                  {program.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed flex-grow">
                  {program.description}
                </p>

                {/* Learn more */}
                <div className="mt-5 flex items-center gap-2 text-neon text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}

          {/* Full-width CTA card */}
          <div className="animate-in-viewport sm:col-span-2 lg:col-span-3 lg:hidden sm:block">
            {/* visible on tablet only as spacer */}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="animate-in-viewport text-center mt-12">
          <a
            href="https://wa.me/919460051155?text=Hi%2C%20I%20want%20to%20know%20more%20about%20training%20programs%20at%20HillNet%20Gym"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-outline inline-flex items-center gap-2 px-8 py-4 rounded text-sm"
          >
            Ask About Programs
          </a>
        </div>
      </div>
    </section>
  );
}
