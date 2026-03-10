import { useEffect, useRef } from "react";

const features = [
  "Weight Loss",
  "Muscle Gain",
  "Strength Training",
  "Functional Fitness",
  "Student Plans",
];

export function AboutSection() {
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
              setTimeout(() => el.classList.add("visible"), idx * 120);
              i++;
            }
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="animate-in-viewport relative">
            <div className="relative group">
              {/* Neon border glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon via-neon/50 to-transparent rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-xl overflow-hidden border border-neon/30">
                <img
                  src="/assets/generated/gym-exterior.dim_1200x800.jpg"
                  alt="HillNet Gym Exterior — Best Gym in Rangbari Kota"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 glass border border-neon/40 rounded-xl px-5 py-3 shadow-neon-sm">
              <p className="text-2xl font-black text-neon font-display">
                ⭐ 4.3
              </p>
              <p className="text-xs text-white/60 uppercase tracking-wide">
                Stars on Google
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 mt-8 lg:mt-0">
            <div className="animate-in-viewport">
              <span className="text-xs font-bold text-neon tracking-[0.3em] uppercase">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 font-display leading-tight">
                About <span className="gradient-text-neon">HillNet Gym</span>
              </h2>
            </div>

            <p className="animate-in-viewport text-white/65 text-base sm:text-lg leading-relaxed">
              HillNet Gym is a premium fitness center located in Rangbari, Kota.
              Equipped with modern machines and guided by expert trainers, we
              deliver real transformation results.
            </p>

            <p className="animate-in-viewport text-white/65 text-base sm:text-lg leading-relaxed">
              Our structured programs cover weight loss, muscle gain, strength
              training, and functional fitness — making us the top choice for
              students and professionals in Kota. Located on MBS Rd, Near Police
              Chouki, we're easily accessible for everyone in Rangbari.
            </p>

            {/* Feature badges */}
            <div className="animate-in-viewport flex flex-wrap gap-2 pt-2">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 rounded-full text-xs font-bold text-neon border border-neon/30 bg-neon/5 tracking-wide uppercase"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="animate-in-viewport grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "500+", label: "Happy Members" },
                { value: "10+", label: "Expert Trainers" },
                { value: "5+", label: "Years Strong" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center glass rounded-lg py-4 px-2"
                >
                  <p className="text-2xl font-black text-neon font-display">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/50 mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
