import { useEffect, useRef } from "react";
import { SiInstagram } from "react-icons/si";

const INSTAGRAM_URL = "https://www.instagram.com/thehillnetgym/";

// Use gallery images as Instagram post placeholders
const instagramPosts = [
  {
    img: "/assets/generated/gallery-weights.dim_800x600.jpg",
    caption:
      "💪 Consistency is the key to transformation. Train hard, rest well! #HillNetGym",
    likes: "284",
    comments: "18",
  },
  {
    img: "/assets/generated/gallery-functional.dim_800x600.jpg",
    caption:
      "🔥 Functional training day at HillNet Gym, Kota! Push your limits every session.",
    likes: "312",
    comments: "24",
  },
  {
    img: "/assets/generated/gallery-boxing.dim_800x600.jpg",
    caption:
      "🥊 Boxing is not just a workout — it's a mindset. Join us at HillNet Gym!",
    likes: "198",
    comments: "15",
  },
  {
    img: "/assets/generated/gallery-machines.dim_800x600.jpg",
    caption:
      "🏋️ New machines, same dedication. Best gym in Rangbari Kota! #Fitness",
    likes: "243",
    comments: "20",
  },
  {
    img: "/assets/generated/gallery-training.dim_800x600.jpg",
    caption:
      "✨ Personal training sessions that deliver REAL results. Book your free trial!",
    likes: "356",
    comments: "31",
  },
  {
    img: "/assets/generated/hero-gym-interior.dim_1920x1080.jpg",
    caption:
      "👀 This is where transformations happen. HillNet Gym, MBS Road, Kota. 💚",
    likes: "487",
    comments: "42",
  },
];

export function InstagramSection() {
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
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gym-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="animate-in-viewport text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <SiInstagram size={28} className="text-pink-400" />
            <span className="text-xs font-bold text-neon tracking-[0.3em] uppercase">
              Instagram
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Follow Us on <span className="gradient-text-neon">Instagram</span>
          </h2>
          <p className="text-white/50 mt-3 text-base">
            Daily fitness motivation, tips, and behind-the-scenes from HillNet
            Gym
          </p>
        </div>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {instagramPosts.map((post, idx) => (
            <a
              key={post.img}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-in-viewport relative group aspect-square overflow-hidden rounded-xl border border-neon/15 hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300 cursor-pointer block"
            >
              <img
                src={post.img}
                alt={`HillNet Gym Instagram Post ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
              {/* Instagram hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-xs line-clamp-3 leading-relaxed mb-2">
                  {post.caption}
                </p>
                <div className="flex items-center gap-4 text-white/70 text-xs">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
              {/* Instagram icon overlay */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <SiInstagram size={16} className="text-white/80" />
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="animate-in-viewport text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-neon-outline px-8 py-4 rounded text-sm"
          >
            <SiInstagram size={20} />
            Follow @thehillnetgym
          </a>
          <p className="text-white/30 text-xs mt-3">
            Join our community for daily fitness motivation
          </p>
        </div>
      </div>
    </section>
  );
}
