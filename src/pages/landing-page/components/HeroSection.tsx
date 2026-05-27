import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import { AudienceType } from "../types";
import phoneMockup from "../../../components/assets/1.png";

interface HeroSectionProps {
  selectedAudience: AudienceType["id"];
  onAudienceChange: (audience: AudienceType["id"]) => void;
}

const audienceOptions: { id: AudienceType["id"]; label: string }[] = [
  { id: "worker", label: "Worker" },
  { id: "business", label: "Business" },
  { id: "investor", label: "Investor" },
];

const featureCards = [
  {
    icon: "Briefcase",
    title: "Find Jobs",
    description: "Browse curated opportunities tailored to your skills.",
    amber: true,
    button: "Explore",
  },
  {
    icon: "Clock",
    title: "Track Hours",
    description: "Log your work and monitor your progress seamlessly.",
    amber: false,
  },
  {
    icon: "Wallet",
    title: "Get Paid Fast",
    description: "Secure and timely payments directly to your account.",
    amber: false,
  },
  {
    icon: "TrendingUp",
    title: "Skill Development",
    description: "Access courses and resources to enhance your profile.",
    amber: false,
  },
];

const HeroSection = ({ selectedAudience, onAudienceChange }: HeroSectionProps) => {
  const getActiveClass = (id: AudienceType["id"]) =>
    id === "business" ? "bg-secondary text-white" : "bg-warning text-white";

  return (
    <section
      id="for-you"
      className="relative bg-background overflow-hidden pt-24 pb-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Audience Pill Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex border border-border rounded-full p-1 bg-card shadow-sm">
            {audienceOptions.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onAudienceChange(id)}
                className={`px-5 py-2 rounded-full text-sm font-body-medium transition-smooth ${
                  selectedAudience === id
                    ? getActiveClass(id)
                    : "text-text-secondary hover:bg-accent"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Heading + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-5xl md:text-6xl font-heading-extra-bold text-foreground mb-4 leading-tight">
            Welcome To ManaSetu
          </h1>
          <p className="text-lg text-text-secondary">
            The unified platform for empowerment and growth.
          </p>
        </motion.div>

        {/* Visual Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-16"
        >
          {/* Left — ManaSetu Id card */}
          <div className="flex-shrink-0">
            <div className="bg-card border border-border rounded-2xl shadow-sm p-5 text-center w-44">
              <div className="flex items-center justify-center mb-3">
                <Icon name="Zap" size={24} className="text-warning" />
              </div>
              <p className="text-sm font-body-medium text-text-secondary mb-3">ManaSetu Id</p>
              <button className="w-full bg-warning text-white rounded-full px-4 py-1.5 text-sm font-body-medium hover:bg-warning/90 transition-smooth">
                Reserve Id
              </button>
            </div>
          </div>

          {/* Center — Phone mockup */}
          <div className="relative flex-shrink-0">
            <div className="w-56 border-4 border-foreground rounded-[2.5rem] overflow-hidden shadow-xl bg-background">
              <img
                src={phoneMockup}
                alt="ManaSetu app interface"
                className="w-full h-auto block"
              />
            </div>
            {/* Floating badge — top right */}
            <div className="absolute -top-3 -right-4 lg:-right-20 bg-card border border-border rounded-xl shadow-sm p-3 flex items-center gap-2 w-44">
              <div className="w-7 h-7 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                <Icon name="User" size={14} className="text-foreground" />
              </div>
              <p className="text-xs text-text-secondary leading-tight">
                Access Opportunities. Connect, grow, and thrive.
              </p>
            </div>
          </div>

          {/* Right — App download buttons */}
          <div className="flex flex-col gap-3 items-center flex-shrink-0">
            <a href="#" aria-label="Download on App Store" className="block">
              <img
                src="/assets/AppIcons/appstore-black.png"
                alt="App Store"
                className="h-11 w-auto rounded-lg"
              />
            </a>
            <a href="#" aria-label="Get it on Google Play" className="block">
              <img
                src="/assets/AppIcons/playstore-black.png"
                alt="Google Play"
                className="h-11 w-auto rounded-lg"
              />
            </a>
          </div>
        </motion.div>

        {/* Feature Cards 2×2 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {featureCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-5 ${
                card.amber
                  ? "bg-warning"
                  : "bg-card border border-border"
              }`}
            >
              <Icon
                name={card.icon as any}
                size={24}
                className={card.amber ? "text-white mb-3" : "text-warning mb-3"}
              />
              <h3
                className={`font-heading-bold text-base mb-2 ${
                  card.amber ? "text-white" : "text-foreground"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm mb-3 ${
                  card.amber ? "text-white/80" : "text-text-secondary"
                }`}
              >
                {card.description}
              </p>
              {card.button && (
                <button className="bg-white/20 text-white rounded-full px-4 py-1 text-sm font-body-medium hover:bg-white/30 transition-smooth">
                  {card.button}
                </button>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-text-secondary">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-border rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
