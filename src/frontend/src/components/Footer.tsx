import { SiFacebook, SiInstagram } from "react-icons/si";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

function handleScrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-gym-dark border-t border-neon/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/uploads/482238641_28931434589835965_7891231935780911335_n-1.jpg"
                alt="HillNet Gym Logo"
                className="h-16 w-auto object-contain"
              />
              <span className="text-white font-extrabold text-2xl tracking-wide uppercase">
                HillNet <span className="text-neon">Gym</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Kota's Most Trusted Fitness Center. Transform your body with
              expert trainers, modern equipment, and science-backed programs.
            </p>
            <p className="text-neon/60 text-xs font-medium mt-3 tracking-wide">
              Best Gym in Rangbari, Kota
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://www.instagram.com/thehillnetgym/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-pink-400 transition-colors text-sm"
                aria-label="Instagram"
              >
                <SiInstagram size={18} />
                <span className="text-xs">@thehillnetgym</span>
              </a>
              <a
                href="https://www.facebook.com/hillnetgym/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-blue-400 transition-colors text-sm"
                aria-label="Facebook"
              >
                <SiFacebook size={18} />
                <span className="text-xs">HillNet Gym</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(link.href);
                    }}
                    className="text-white/45 hover:text-neon transition-colors text-sm"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-white/45 text-sm leading-relaxed">
                MBS Rd, Near Police Chouki,
                <br />
                Rangbari, Kota
                <br />
                Rajasthan 324005
              </p>
              <a
                href="tel:+919460051155"
                className="block text-white/45 hover:text-neon transition-colors text-sm"
              >
                +91 94600 51155
              </a>
              <a
                href="https://wa.me/919460051155"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neon/70 hover:text-neon transition-colors text-sm"
              >
                <span>💬</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {currentYear} HillNet Gym. All rights reserved.
          </p>
          <p className="text-white/20 text-xs text-center sm:text-right">
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/40 transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </p>
        </div>

        {/* SEO footer text */}
        <div className="mt-4 pt-4 border-t border-white/3 text-center">
          <p className="text-white/15 text-xs">
            Best Gym in Rangbari Kota &bull; Gym near Police Chouki Kota &bull;
            Fitness Center MBS Road Kota &bull; Personal Trainer Kota
          </p>
        </div>
      </div>
    </footer>
  );
}
