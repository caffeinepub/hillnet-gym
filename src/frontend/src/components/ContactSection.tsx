import { Loader2, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { useActor } from "../hooks/useActor";

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { actor } = useActor();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }
    if (!actor) {
      setErrorMsg("Connection error. Please try again later.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await actor.submitInquiry(
        generateId(),
        name.trim(),
        phone.trim(),
        message.trim(),
      );
      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setErrorMsg("Failed to submit. Please try WhatsApp instead.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-black overflow-hidden"
    >
      {/* Decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-neon/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="animate-in-viewport text-center mb-16">
          <span className="text-xs font-bold text-neon tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 font-display">
            Contact <span className="gradient-text-neon">Us</span>
          </h2>
          <p className="text-white/50 mt-4 text-base sm:text-lg">
            Have questions? We'd love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact Info + Form */}
          <div className="space-y-8">
            {/* Contact info */}
            <div className="animate-in-viewport glass rounded-xl p-7 border border-neon/15">
              <h3 className="text-lg font-bold text-white mb-5 font-display">
                Find Us
              </h3>
              <div className="space-y-4">
                <ContactItem
                  icon={
                    <MapPin
                      size={16}
                      className="text-neon flex-shrink-0 mt-0.5"
                    />
                  }
                  label="Address"
                  content="MBS Rd, Near Police Chouki, Rangbari, Kota, Rajasthan 324005"
                />
                <ContactItem
                  icon={<Phone size={16} className="text-neon flex-shrink-0" />}
                  label="Phone"
                  content={
                    <a
                      href="tel:+919460051155"
                      className="text-white/80 hover:text-neon transition-colors"
                    >
                      +91 94600 51155
                    </a>
                  }
                />
                <ContactItem
                  icon={
                    <MessageCircle
                      size={16}
                      className="text-neon flex-shrink-0"
                    />
                  }
                  label="WhatsApp"
                  content={
                    <a
                      href="https://wa.me/919460051155"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon hover:underline font-medium"
                    >
                      Chat on WhatsApp →
                    </a>
                  }
                />
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/thehillnetgym/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-pink-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <SiInstagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/hillnetgym/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-blue-400 transition-colors"
                    aria-label="Facebook"
                  >
                    <SiFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-in-viewport glass rounded-xl p-7 border border-neon/15">
              <h3 className="text-lg font-bold text-white mb-5 font-display">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 focus:border-neon/50 focus:outline-none focus:ring-1 focus:ring-neon/30 rounded px-4 py-3 text-white placeholder-white/25 text-sm transition-all duration-200"
                    data-ocid="contact.name_input"
                    disabled={status === "loading"}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white/5 border border-white/10 focus:border-neon/50 focus:outline-none focus:ring-1 focus:ring-neon/30 rounded px-4 py-3 text-white placeholder-white/25 text-sm transition-all duration-200"
                    data-ocid="contact.phone_input"
                    disabled={status === "loading"}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi, I'm interested in joining HillNet Gym..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 focus:border-neon/50 focus:outline-none focus:ring-1 focus:ring-neon/30 rounded px-4 py-3 text-white placeholder-white/25 text-sm transition-all duration-200 resize-none"
                    data-ocid="contact.message_textarea"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div
                    className="flex items-center gap-3 bg-neon/10 border border-neon/30 rounded p-3 text-neon text-sm"
                    data-ocid="contact.success_state"
                  >
                    <span className="text-lg">✓</span>
                    <span>Message sent! We'll contact you shortly.</span>
                  </div>
                )}
                {status === "error" && (
                  <div
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded p-3 text-red-400 text-sm"
                    data-ocid="contact.error_state"
                  >
                    <span className="text-lg">⚠</span>
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="btn-neon w-full py-3.5 rounded text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  data-ocid="contact.submit_button"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    "Message Sent ✓"
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <p className="text-center text-white/30 text-xs">
                  Or{" "}
                  <a
                    href="https://wa.me/919460051155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon hover:underline"
                  >
                    message us on WhatsApp
                  </a>{" "}
                  for instant replies
                </p>
              </form>
            </div>
          </div>

          {/* Right: Map */}
          <div className="animate-in-viewport">
            <div className="h-full min-h-[400px] rounded-xl overflow-hidden border border-neon/15 hover:border-neon/35 transition-colors duration-300 sticky top-24">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.2734256418927!2d75.83108807525!3d25.144736977698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f850c3f2be33d%3A0x78bd74e6a68c6093!2sHillNet%20Gym!5e0!3m2!1sen!2sin!4v1704345600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HillNet Gym Location - MBS Road Rangbari Kota"
                className="grayscale brightness-75"
                data-ocid="contact.map_marker"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  content,
}: {
  icon: React.ReactNode;
  label: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="text-xs text-white/35 uppercase tracking-wider font-semibold mb-0.5">
          {label}
        </p>
        {typeof content === "string" ? (
          <p className="text-white/80 text-sm">{content}</p>
        ) : (
          <div className="text-sm">{content}</div>
        )}
      </div>
    </div>
  );
}
