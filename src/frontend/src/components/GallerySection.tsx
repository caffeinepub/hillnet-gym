import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "/assets/generated/hero-gym-interior.dim_1920x1080.jpg",
    alt: "Gym Floor with Modern Equipment at HillNet Gym Kota",
    label: "Gym Floor",
  },
  {
    src: "/assets/generated/gallery-machines.dim_800x600.jpg",
    alt: "Weight Training Machines at HillNet Gym",
    label: "Weight Machines",
  },
  {
    src: "/assets/generated/gallery-boxing.dim_800x600.jpg",
    alt: "Punching Bag and Functional Training Area at HillNet Gym",
    label: "Boxing Area",
  },
  {
    src: "/assets/generated/gallery-functional.dim_800x600.jpg",
    alt: "Functional Training Equipment at HillNet Gym Rangbari Kota",
    label: "Functional Zone",
  },
  {
    src: "/assets/generated/gallery-training.dim_800x600.jpg",
    alt: "Training Area at HillNet Gym Kota",
    label: "Training Area",
  },
  {
    src: "/assets/generated/gallery-weights.dim_800x600.jpg",
    alt: "Dumbbells and Free Weights at HillNet Gym",
    label: "Dumbbells",
  },
  {
    src: "/assets/generated/gym-exterior.dim_1200x800.jpg",
    alt: "HillNet Gym Exterior Rangbari Kota",
    label: "Gym Exterior",
  },
  {
    src: "/assets/generated/motivation-banner.dim_1920x900.jpg",
    alt: "Interior of HillNet Gym Rangbari Kota",
    label: "Gym Interior",
  },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % galleryImages.length : null,
        );
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + galleryImages.length) % galleryImages.length
            : null,
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gym-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="animate-in-viewport text-center mb-16">
          <span className="text-xs font-bold text-neon tracking-[0.3em] uppercase">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 font-display">
            Inside <span className="gradient-text-neon">HillNet Gym</span>
          </h2>
          <p className="text-white/50 mt-4 text-base sm:text-lg">
            See our premium facilities — built for serious results.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Large first image — spans 2 cols */}
          <div
            className="animate-in-viewport col-span-2 row-span-1"
            data-ocid="gallery.item.1"
          >
            <GalleryImage
              {...galleryImages[0]}
              onClick={() => setLightboxIndex(0)}
              aspectClass="aspect-[16/9]"
            />
          </div>

          {/* Second image */}
          <div
            className="animate-in-viewport col-span-1"
            data-ocid="gallery.item.2"
          >
            <GalleryImage
              {...galleryImages[1]}
              onClick={() => setLightboxIndex(1)}
              aspectClass="aspect-square"
            />
          </div>

          {/* Third image */}
          <div
            className="animate-in-viewport col-span-1"
            data-ocid="gallery.item.3"
          >
            <GalleryImage
              {...galleryImages[2]}
              onClick={() => setLightboxIndex(2)}
              aspectClass="aspect-square"
            />
          </div>

          {/* Images 4–8 */}
          {galleryImages.slice(3).map((image, i) => (
            <div
              key={image.src}
              className="animate-in-viewport col-span-1"
              data-ocid={`gallery.item.${i + 4}`}
            >
              <GalleryImage
                {...image}
                onClick={() => setLightboxIndex(i + 3)}
                aspectClass="aspect-square"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <dialog
          open
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 w-full h-full max-w-full max-h-full m-0 border-0"
          onClick={() => setLightboxIndex(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxIndex(null)}
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white/70 hover:text-neon transition-colors p-2 rounded-full border border-white/10 hover:border-neon/50"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl border border-neon/20"
            />
            <p className="text-center text-white/60 text-sm mt-3 font-medium">
              {galleryImages[lightboxIndex].label}
            </p>

            {/* Navigation */}
            <button
              type="button"
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 text-white/60 hover:text-neon p-2 rounded-full border border-white/10 hover:border-neon/40 transition-all"
              aria-label="Previous image"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + galleryImages.length) %
                    galleryImages.length,
                )
              }
            >
              ←
            </button>
            <button
              type="button"
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 text-white/60 hover:text-neon p-2 rounded-full border border-white/10 hover:border-neon/40 transition-all"
              aria-label="Next image"
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
              }
            >
              →
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
}

function GalleryImage({
  src,
  alt,
  label,
  onClick,
  aspectClass,
}: {
  src: string;
  alt: string;
  label: string;
  onClick: () => void;
  aspectClass: string;
}) {
  return (
    <button
      type="button"
      className={`relative group cursor-pointer overflow-hidden rounded-xl border border-neon/10 hover:border-neon/50 transition-all duration-300 hover:shadow-neon-sm w-full p-0 bg-transparent ${aspectClass}`}
      onClick={onClick}
      aria-label={`View ${label}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white text-sm font-bold tracking-wide">
          {label}
        </span>
      </div>
      {/* Neon corner accent */}
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
