import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-neon/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3 flex-shrink-0 bg-transparent border-none p-0 cursor-pointer"
          data-ocid="nav.link"
          aria-label="Go to top"
        >
          <img
            src="/assets/uploads/482238641_28931434589835965_7891231935780911335_n-1.jpg"
            alt="HillNet Gym Logo"
            className="h-16 w-auto object-contain"
          />
          <span className="text-white font-extrabold text-2xl tracking-wide uppercase">
            HillNet <span className="text-neon">Gym</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-white/80 hover:text-neon transition-colors duration-200 tracking-wide uppercase"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Social Icons */}
          <a
            href="https://www.instagram.com/thehillnetgym/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-neon transition-colors duration-200"
            aria-label="Instagram"
            data-ocid="nav.link"
          >
            <SiInstagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/hillnetgym/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-neon transition-colors duration-200"
            aria-label="Facebook"
            data-ocid="nav.link"
          >
            <SiFacebook size={18} />
          </a>

          {/* Join Now CTA */}
          <button
            type="button"
            onClick={() => handleNavClick("#pricing")}
            className="btn-neon px-5 py-2 rounded text-sm"
            data-ocid="nav.join_button"
          >
            Join Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden text-white p-2 rounded hover:text-neon transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-neon/10 px-4 py-6">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block text-sm font-semibold text-white/80 hover:text-neon transition-colors uppercase tracking-widest py-2"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/thehillnetgym/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-neon transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/hillnetgym/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-neon transition-colors"
              aria-label="Facebook"
            >
              <SiFacebook size={22} />
            </a>
            <button
              type="button"
              onClick={() => handleNavClick("#pricing")}
              className="btn-neon px-5 py-2 rounded text-sm flex-1"
              data-ocid="nav.join_button"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
