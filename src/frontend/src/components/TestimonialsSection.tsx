import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rahul S.",
    stars: 5,
    text: "Best gym in Rangbari Kota with great equipment and professional trainers! The environment is amazing and I've seen great results.",
    tag: "Weight Loss",
    initials: "RS",
  },
  {
    name: "Priya M.",
    stars: 5,
    text: "Great environment and motivating trainers. Lost 10kg in just 3 months! The structured diet guidance really helped.",
    tag: "Transformation",
    initials: "PM",
  },
  {
    name: "Amit K.",
    stars: 5,
    text: "Perfect for students in Kota. Affordable plans with excellent facilities. Flexible timings make it easy to balance with coaching.",
    tag: "Student Plan",
    initials: "AK",
  },
  {
    name: "Deepak R.",
    stars: 4,
    text: "Modern gym near Police Chouki with all the equipment you need. The trainers are knowledgeable and always ready to help.",
    tag: "Muscle Gain",
    initials: "DR",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`text-sm ${i <= count ? "text-yellow-400" : "text-white/20"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
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
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-neon/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-in-viewport text-center mb-6">
          <span className="text-xs font-bold text-neon tracking-[0.3em] uppercase">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 font-display">
            What Our Members <span className="gradient-text-neon">Say</span>
          </h2>
        </div>

        {/* Google rating badge */}
        <div className="animate-in-viewport flex justify-center mb-14">
          <div className="glass rounded-xl px-8 py-5 border border-neon/20 flex items-center gap-6">
            <div className="text-center">
              <p className="text-4xl font-black text-neon font-display">4.3</p>
              <div className="flex justify-center gap-0.5 mt-1">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
                <span className="text-yellow-400/60 text-lg">★</span>
              </div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <p className="text-white font-semibold text-sm">Based on</p>
              <p className="text-white font-bold">Google Reviews</p>
              <p className="text-white/40 text-xs mt-1">⭐ Verified Rating</p>
            </div>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="animate-in-viewport">
              <div className="glass rounded-xl p-6 border border-neon/10 hover:border-neon/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-neon-sm h-full flex flex-col">
                {/* Quote */}
                <div className="text-neon text-3xl font-black mb-3 leading-none">
                  "
                </div>

                {/* Text */}
                <p className="text-white/65 text-sm leading-relaxed flex-grow mb-4">
                  {t.text}
                </p>

                {/* Tag */}
                <span className="text-xs text-neon/70 bg-neon/5 border border-neon/15 rounded-full px-2.5 py-0.5 self-start mb-4 uppercase tracking-wide font-semibold">
                  {t.tag}
                </span>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div className="w-9 h-9 rounded-full bg-neon/15 border border-neon/30 flex items-center justify-center text-neon text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <StarRating count={t.stars} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
