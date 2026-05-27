import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const avatars = [
  {
    initials: "R",
    name: "Rahul",
    role: "Student Worker",
    bg: "bg-emerald-200",
    text: "text-emerald-800",
    style: { left: "8%", top: "42%" } as React.CSSProperties,
  },
  {
    initials: "P",
    name: "Priya",
    role: "Freelancer",
    bg: "bg-blue-200",
    text: "text-blue-800",
    style: { left: "18%", bottom: "22%" } as React.CSSProperties,
  },
  {
    initials: "A",
    name: "Amit",
    role: "Business Owner",
    bg: "bg-orange-200",
    text: "text-orange-800",
    style: { right: "8%", top: "28%" } as React.CSSProperties,
  },
  {
    initials: "S",
    name: "Sneha",
    role: "Gig Worker",
    bg: "bg-purple-200",
    text: "text-purple-800",
    style: { right: "12%", top: "55%" } as React.CSSProperties,
  },
];

const floatingIcons = [
  {
    emoji: "📅",
    label: "calendar",
    style: { left: "20%", top: "10%" } as React.CSSProperties,
    yAnim: [0, -12, 0],
    duration: 3,
    delay: 0,
  },
  {
    emoji: "💰",
    label: "earnings",
    style: { right: "20%", top: "8%" } as React.CSSProperties,
    yAnim: [0, -10, 0],
    duration: 3.5,
    delay: 0.7,
  },
  {
    emoji: "🎉",
    label: "party",
    style: { right: "33%", top: "56%" } as React.CSSProperties,
    yAnim: [0, -8, 0],
    duration: 2.8,
    delay: 1.4,
  },
];

const WaitlistSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById("get-started");
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orbital visual — desktop only */}
        <div className="relative hidden lg:flex items-center justify-center" style={{ height: 620 }}>
          {/* Concentric rings */}
          {[580, 430, 280].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-border/60"
              style={{
                width: size,
                height: size,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 1 - i * 0.15,
              }}
            />
          ))}

          {/* Floating emoji icons */}
          {floatingIcons.map((icon) => (
            <motion.div
              key={icon.label}
              className="absolute text-4xl drop-shadow-lg select-none z-20"
              style={icon.style}
              animate={{ y: icon.yAnim }}
              transition={{
                duration: icon.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: icon.delay,
              }}
              aria-label={icon.label}
            >
              {icon.emoji}
            </motion.div>
          ))}

          {/* Avatar cards */}
          {avatars.map((avatar, i) => (
            <motion.div
              key={avatar.initials}
              className="absolute z-20"
              style={avatar.style}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-16 h-16 rounded-full border-4 border-white shadow-md flex items-center justify-center ${avatar.bg}`}
                >
                  <span className={`text-xl font-heading-bold ${avatar.text}`}>
                    {avatar.initials}
                  </span>
                </div>
                <span className="text-xs text-text-secondary font-body-medium bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-full whitespace-nowrap">
                  {avatar.name}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Central chat bubble */}
          <motion.div
            className="relative z-10 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#065f46] text-white rounded-3xl px-8 py-7 shadow-2xl">
              <p className="text-base leading-relaxed mb-3">
                I&apos;m passionate about giving everyone a fair shot at earning,
                not just the privileged few.
              </p>
              <p className="text-base leading-relaxed mb-3">
                I get to connect talented workers with real businesses, share the
                wins and challenges, and grow a community that&apos;s as much
                about people as it is about opportunity.
              </p>
              <p className="text-base leading-relaxed">
                Every task is an invitation to be part of that story 🤝
              </p>
            </div>
            {/* Speech bubble tail */}
            <div
              className="absolute -bottom-3 left-10 w-0 h-0"
              style={{
                borderLeft: "14px solid transparent",
                borderRight: "14px solid transparent",
                borderTop: "14px solid #065f46",
              }}
            />
          </motion.div>
        </div>

        {/* Mobile chat bubble — simplified */}
        <div className="lg:hidden flex justify-center mb-10">
          <motion.div
            className="relative max-w-sm w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#065f46] text-white rounded-3xl px-7 py-6 shadow-2xl">
              <p className="text-sm leading-relaxed mb-3">
                I&apos;m passionate about giving everyone a fair shot at earning,
                not just the privileged few.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                I get to connect talented workers with real businesses, share the
                wins and challenges, and grow a community that&apos;s as much
                about people as it is about opportunity.
              </p>
              <p className="text-sm leading-relaxed">
                Every task is an invitation to be part of that story 🤝
              </p>
            </div>
            <div
              className="absolute -bottom-3 left-10 w-0 h-0"
              style={{
                borderLeft: "14px solid transparent",
                borderRight: "14px solid transparent",
                borderTop: "14px solid #065f46",
              }}
            />
          </motion.div>
        </div>

        {/* CTA area */}
        <motion.div
          className="flex flex-col items-center gap-6 mt-4 lg:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button
            onClick={scrollToForm}
            className="bg-foreground text-background px-10 py-4 rounded-full text-lg font-cta flex items-center gap-3 shadow-cta hover:bg-secondary transition-smooth animate-pulse-cta"
          >
            Join Waitlist
            <Icon name="ChevronRight" size={20} className="text-background" />
          </button>

          <div className="flex items-center gap-8 flex-wrap justify-center">
            <a
              href="#"
              className="flex items-center gap-2 text-foreground underline underline-offset-4 text-sm font-body-medium hover:text-text-secondary transition-smooth"
            >
              <span>🎬</span> Behind-the-scenes
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-foreground underline underline-offset-4 text-sm font-body-medium hover:text-text-secondary transition-smooth"
            >
              <span>🌿</span> How it all started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
