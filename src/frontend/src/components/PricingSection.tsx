import { useEffect, useRef } from "react";

const WHATSAPP_JOIN =
  "https://wa.me/919460051155?text=Hi%2C%20I%20want%20to%20join%20HillNet%20Gym%20membership";

const plans = [
  {
    name: "1 Month",
    price: "₹1,500",
    period: "/ month",
    badge: null,
    highlight: false,
    tagline: "Try it out",
    benefits: [
      "Access to all equipment",
      "Expert guidance",
      "Locker facility",
      "Flexible timings",
    ],
  },
  {
    name: "3 Months",
    price: "₹4,050",
    period: "/ 3 months",
    badge: "10% OFF",
    highlight: false,
    tagline: "Build the habit",
    benefits: [
      "Access to all equipment",
      "Expert guidance",
      "Locker facility",
      "Flexible timings",
    ],
  },
  {
    name: "4 Months Special",
    price: "₹4,500",
    period: "/ 4 months",
    badge: "SPECIAL OFFER",
    highlight: false,
    tagline: "See real change",
    benefits: [
      "Access to all equipment",
      "Expert guidance",
      "Locker facility",
      "Diet consultation",
    ],
  },
  {
    name: "6 Months",
    price: "₹7,200",
    period: "/ 6 months",
    badge: "20% OFF",
    highlight: false,
    tagline: "Serious results",
    benefits: [
      "Access to all equipment",
      "Expert guidance",
      "Locker facility",
      "Diet consultation",
    ],
  },
  {
    name: "12 Months",
    price: "₹10,800",
    period: "/ year",
    badge: "40% OFF",
    highlight: true,
    tagline: "Best investment",
    benefits: [
      "Access to all equipment",
      "Expert guidance",
      "Locker facility",
      "Diet consultation",
      "Body assessment",
      "Priority support",
    ],
  },
  {
    name: "Couple Offer",
    price: "₹10,000",
    period: "/ year (2 people)",
    badge: "COUPLE DEAL",
    highlight: false,
    tagline: "Train together",
    benefits: [
      "1 Year for 2 people",
      "Access to all equipment",
      "Expert guidance",
      "Locker facility",
    ],
  },
];

export function PricingSection() {
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
              setTimeout(() => el.classList.add("visible"), idx * 80);
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
      id="pricing"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-black overflow-hidden"
    >
      {/* Decorations */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-neon/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-neon/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-in-viewport text-center mb-16">
          <span className="text-xs font-bold text-neon tracking-[0.3em] uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 font-display">
            Membership <span className="gradient-text-neon">Plans</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Invest in your health. Join Kota's best gym today.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              data-ocid={`pricing.plan.item.${index + 1}`}
              className="animate-in-viewport"
            >
              <div
                className={`relative h-full flex flex-col rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-neon shadow-neon bg-gradient-to-b from-neon/10 to-black/80 backdrop-blur-xl"
                    : "glass border-neon/15 hover:border-neon/40 hover:shadow-neon-sm"
                }`}
              >
                {/* Best Value banner */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neon text-black text-xs font-black px-4 py-1 rounded-full tracking-widest uppercase whitespace-nowrap shadow-neon-sm">
                    ⭐ BEST VALUE
                  </div>
                )}

                <div className="p-7 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-1">
                        {plan.tagline}
                      </p>
                      <h3 className="text-xl font-black text-white font-display">
                        {plan.name}
                      </h3>
                    </div>
                    {plan.badge && (
                      <span
                        className={`text-xs font-black px-2.5 py-1 rounded-full tracking-wide uppercase whitespace-nowrap ${
                          plan.highlight
                            ? "bg-neon text-black"
                            : "bg-neon/10 text-neon border border-neon/30"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="my-5">
                    <span
                      className={`text-4xl font-black font-display ${
                        plan.highlight
                          ? "text-neon shadow-neon-text"
                          : "text-white"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-white/40 text-sm ml-1">
                      {plan.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-px mb-5 ${plan.highlight ? "bg-neon/30" : "bg-white/8"}`}
                  />

                  {/* Benefits */}
                  <ul className="space-y-2.5 flex-grow mb-6">
                    {plan.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-sm text-white/70"
                      >
                        <span className="text-neon text-base flex-shrink-0">
                          ✓
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={WHATSAPP_JOIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3.5 px-6 rounded font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                      plan.highlight ? "btn-neon" : "btn-neon-outline"
                    }`}
                    data-ocid={`pricing.join_button.${index + 1}`}
                  >
                    {plan.highlight ? "Start Today →" : "Join Now"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="animate-in-viewport text-center mt-10 text-white/35 text-sm">
          <p>
            All plans include access to gym during operating hours. No hidden
            fees.
          </p>
          <p className="mt-1">
            Questions?{" "}
            <a
              href="https://wa.me/919460051155"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon hover:underline"
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
