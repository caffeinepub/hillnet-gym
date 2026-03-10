import { useEffect, useRef } from "react";

const WHATSAPP_BASE = "https://wa.me/919460051155";
const WHATSAPP_TRIAL = `${WHATSAPP_BASE}?text=Hi%2C%20I%20want%20to%20book%20a%20free%20trial%20at%20HillNet%20Gym`;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const timeout = setTimeout(() => {
      section.querySelectorAll(".animate-in-viewport").forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 150);
      });
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-gym-interior.dim_1920x1080.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Green gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      {/* Neon ambient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neon/5" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Top badge */}
        <div className="animate-in-viewport inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-xs font-semibold text-neon tracking-widest uppercase">
          <span className="w-2 h-2 bg-neon rounded-full animate-pulse inline-block" />
          Kota's Most Trusted Fitness Center
        </div>

        {/* Main Headline */}
        <h1 className="animate-in-viewport font-display font-black text-white leading-[0.95] tracking-tight mb-6">
          <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
            Transform Your Body
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl gradient-text-neon mt-1">
            at Kota's Most
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white mt-1">
            Trusted Gym
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-in-viewport text-white/70 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional training, modern equipment, and real results.
        </p>

        {/* CTA Buttons */}
        <div className="animate-in-viewport flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={() => handleScrollTo("#pricing")}
            className="btn-neon px-8 py-4 rounded text-base w-full sm:w-auto min-w-[180px]"
            data-ocid="hero.join_button"
          >
            Join Now →
          </button>
          <a
            href={WHATSAPP_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-outline px-8 py-4 rounded text-base w-full sm:w-auto min-w-[180px] text-center inline-block"
            data-ocid="hero.trial_button"
          >
            Book Free Trial
          </a>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded text-base w-full sm:w-auto min-w-[180px] glass text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 border border-white/20"
            data-ocid="hero.whatsapp_button"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>

        {/* Stats bar */}
        <div className="animate-in-viewport">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 glass rounded-xl px-8 py-5">
            <StatItem value="500+" label="Members" />
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <StatItem value="4.3★" label="Google Rating" />
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <StatItem value="5+" label="Years Experience" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase font-medium">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-black text-neon font-display">{value}</p>
      <p className="text-xs text-white/50 uppercase tracking-wider mt-1">
        {label}
      </p>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label="WhatsApp"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
