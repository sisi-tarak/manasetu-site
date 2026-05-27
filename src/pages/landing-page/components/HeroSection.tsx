import type { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  amber: boolean;
  btn?: string;
}

interface AudienceContent {
  tagline: string;
  leftCard: { icon: string; label: string; btn: string };
  features: FeatureCard[];
  mockRows: { name: string; detail: string; amount: string }[];
}

const audienceContent: Record<AudienceType["id"], AudienceContent> = {
  worker: {
    tagline:
      "Zero commission on physical tasks — earn rewards, badges & bonuses.",
    leftCard: { icon: "Zap", label: "ManaSetu Id", btn: "Reserve Id" },
    features: [
      {
        icon: "Briefcase",
        title: "Find Jobs",
        description: "Browse curated opportunities tailored to your skills.",
        amber: true,
        btn: "Explore",
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
        icon: "BookOpen",
        title: "Skill Development",
        description: "Access courses and resources to enhance your profile.",
        amber: false,
      },
    ],
    mockRows: [
      { name: "Delivery Task", detail: "2 km away", amount: "₹250" },
      { name: "Data Entry", detail: "Remote", amount: "₹500" },
      { name: "Event Help", detail: "Hyderabad", amount: "₹400" },
    ],
  },
  business: {
    tagline:
      "Smart subscription plans from ₹199/mo — AI invoicing & verified workers.",
    leftCard: { icon: "Building2", label: "Business Plan", btn: "Get Started" },
    features: [
      {
        icon: "FileText",
        title: "Post Tasks",
        description: "Create and manage tasks for verified workers instantly.",
        amber: true,
        btn: "Post Now",
      },
      {
        icon: "BarChart",
        title: "Track Projects",
        description:
          "Monitor project progress and worker performance in real-time.",
        amber: false,
      },
      {
        icon: "Shield",
        title: "Secure Payments",
        description: "Escrow-protected payments with AI-powered invoicing.",
        amber: false,
      },
      {
        icon: "Users",
        title: "Find Talent",
        description: "Access verified, skilled workers ready to hire.",
        amber: false,
      },
    ],
    mockRows: [
      { name: "Priya S.", detail: "4.9 ★  Verified", amount: "₹399/mo" },
      { name: "Rahul M.", detail: "4.8 ★  Verified", amount: "₹199/mo" },
      { name: "Anjali K.", detail: "5.0 ★  Premium", amount: "₹599/mo" },
    ],
  },
  investor: {
    tagline:
      "Join our partnership waitlist for investment and collaboration opportunities.",
    leftCard: {
      icon: "TrendingUp",
      label: "Partnership",
      btn: "Join Waitlist",
    },
    features: [
      {
        icon: "TrendingUp",
        title: "Market Insights",
        description:
          "Access real-time data on India's gig economy growth trends.",
        amber: true,
        btn: "Explore",
      },
      {
        icon: "Activity",
        title: "Platform Metrics",
        description: "Track platform growth, retention, and performance data.",
        amber: false,
      },
      {
        icon: "Globe",
        title: "Partnerships",
        description: "Explore collaboration and investment opportunities.",
        amber: false,
      },
      {
        icon: "Award",
        title: "Early Access",
        description: "Priority access to new features and growth programs.",
        amber: false,
      },
    ],
    mockRows: [
      { name: "₹50L+", detail: "Target payouts Y1", amount: "+120%" },
      { name: "10K+", detail: "Tasks target Y1", amount: "+85%" },
      { name: "4.8/5", detail: "Target rating", amount: "100%" },
    ],
  },
};

const getActiveClass = (id: AudienceType["id"]) =>
  id === "business" ? "bg-secondary text-white" : "bg-warning text-white";

const MockAppCard = ({
  rows,
  offset,
  zIndex,
}: {
  rows: { name: string; detail: string; amount: string }[];
  offset: string;
  zIndex: number;
}) => (
  <div
    className="absolute bg-card border border-border rounded-2xl shadow-md overflow-hidden"
    style={{ width: "168px", zIndex, ...parseOffset(offset) }}
  >
    {/* Card header bar */}
    <div className="h-7 bg-warning/20 flex items-center px-3 gap-1.5">
      <div className="w-2 h-2 rounded-full bg-warning/60" />
      <div className="h-1.5 bg-warning/40 rounded flex-1" />
    </div>
    {/* Rows */}
    <div className="p-2 space-y-1.5">
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex items-center gap-2 py-1 border-b border-border/40 last:border-0"
        >
          <div className="w-7 h-7 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-text-secondary/30" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-body-medium text-foreground truncate">
              {row.name}
            </p>
            <p className="text-[10px] text-text-secondary truncate">
              {row.detail}
            </p>
          </div>
          <span className="text-[10px] font-body-medium text-warning flex-shrink-0">
            {row.amount}
          </span>
        </div>
      ))}
    </div>
  </div>
);

function parseOffset(offset: string): CSSProperties {
  const parts = offset.split(" ");
  const result: CSSProperties = {};
  parts.forEach((p) => {
    const [k, v] = p.split(":");
    (result as any)[k] = v;
  });
  return result;
}

const HeroSection = ({
  selectedAudience,
  onAudienceChange,
}: HeroSectionProps) => {
  const content = audienceContent[selectedAudience];

  return (
    <section
      id="for-you"
      className="relative bg-background overflow-hidden pt-16 pb-28"
    >
      {/* ── SVG organic blob shapes at corners ── */}

      {/* Top-left blob */}
      <svg
        aria-hidden="true"
        className="absolute -top-6 -left-6 pointer-events-none"
        width="380"
        height="420"
        viewBox="0 0 380 420"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M30,0 C95,-10 185,10 245,55 C305,100 340,175 335,255
             C330,335 290,385 230,405 C170,425 100,415 55,380
             C10,345 -12,288 -5,225 C2,162 -28,108 -8,60
             C12,12 -35,10 30,0 Z"
        />
      </svg>

      {/* Top-right blob */}
      <svg
        aria-hidden="true"
        className="absolute -top-6 -right-6 pointer-events-none"
        width="380"
        height="420"
        viewBox="0 0 380 420"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scaleX(-1)" }}
      >
        <path
          fill="white"
          d="M30,0 C95,-10 185,10 245,55 C305,100 340,175 335,255
             C330,335 290,385 230,405 C170,425 100,415 55,380
             C10,345 -12,288 -5,225 C2,162 -28,108 -8,60
             C12,12 -35,10 30,0 Z"
        />
      </svg>

      {/* Bottom-left blob */}
      <svg
        aria-hidden="true"
        className="absolute -bottom-6 -left-6 pointer-events-none"
        width="360"
        height="390"
        viewBox="0 0 360 390"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scaleY(-1)" }}
      >
        <path
          fill="white"
          d="M25,0 C85,-8 170,12 225,55 C280,98 315,168 308,242
             C301,316 262,366 205,382 C148,398 84,386 44,352
             C4,318 -14,264 -6,203 C2,142 -24,94 -4,50
             C16,6 -35,8 25,0 Z"
        />
      </svg>

      {/* Bottom-right blob */}
      <svg
        aria-hidden="true"
        className="absolute -bottom-6 -right-6 pointer-events-none"
        width="360"
        height="390"
        viewBox="0 0 360 390"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(-1,-1)" }}
      >
        <path
          fill="white"
          d="M25,0 C85,-8 170,12 225,55 C280,98 315,168 308,242
             C301,316 262,366 205,382 C148,398 84,386 44,352
             C4,318 -14,264 -6,203 C2,142 -24,94 -4,50
             C16,6 -35,8 25,0 Z"
        />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Audience Pill Toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex border border-border rounded-full p-1 bg-card shadow-sm">
            {audienceOptions.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onAudienceChange(id)}
                className={`px-6 py-2 rounded-full text-sm font-body-medium transition-smooth ${
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

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-3 pt-10"
        >
          <h1 className="text-5xl md:text-6xl font-heading-extra-bold text-foreground leading-tight">
            Welcome To ManaSetu
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-center mb-2"
        >
          <p className="text-lg text-text-secondary">
            The unified platform for empowerment and growth.
          </p>
        </motion.div>

        {/* Audience-specific tagline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAudience}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-body-medium text-warning">
              {content.tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Visual Area ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16"
        >
          {/* Left — audience-specific floating card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${selectedAudience}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="flex-shrink-0"
            >
              <div className="bg-card border border-border rounded-2xl shadow-sm p-5 text-center w-44">
                <div className="flex items-center justify-center mb-3">
                  <Icon
                    name={content.leftCard.icon as any}
                    size={24}
                    className="text-warning"
                  />
                </div>
                <p className="text-sm font-body-medium text-text-secondary mb-3">
                  {content.leftCard.label}
                </p>
                <button className="w-full bg-warning text-white rounded-full px-4 py-1.5 text-sm font-body-medium hover:bg-warning/90 transition-smooth">
                  {content.leftCard.btn}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Center — Phone mockup with overlapping app cards */}
          <div
            className="relative flex-shrink-0"
            style={{ width: "260px", height: "480px" }}
          >
            {/* Background mock card 1 (furthest back) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`card1-${selectedAudience}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <MockAppCard
                  rows={content.mockRows}
                  offset="right:-80px top:200px"
                  zIndex={1}
                />
              </motion.div>
            </AnimatePresence>

            {/* Background mock card 2 (middle) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`card2-${selectedAudience}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <MockAppCard
                  rows={content.mockRows}
                  offset="right:-44px top:140px"
                  zIndex={2}
                />
              </motion.div>
            </AnimatePresence>

            {/* Main phone frame */}
            <div
              className="absolute left-0 top-0 z-10 flex items-center justify-center"
              style={{ width: "224px" }}
            >
              <div className="border-4 border-foreground rounded-[2.5rem] overflow-hidden shadow-2xl bg-background">
                {/* Dynamic Island notch */}
                <div className="bg-foreground flex justify-center pt-2 pb-1">
                  <div className="w-24 h-5 bg-foreground rounded-full border-2 border-background" />
                </div>
                <img
                  src={phoneMockup}
                  alt="ManaSetu app interface"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Floating badge — Access Opportunities */}
            <div
              className="absolute z-20 bg-card border border-border rounded-xl shadow-sm p-2.5 flex items-center gap-2"
              style={{ top: "-16px", right: "-90px", width: "192px" }}
            >
              <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center border border-border">
                <Icon name="User" size={14} className="text-foreground" />
              </div>
              <div>
                <p className="text-xs font-body-medium text-foreground leading-tight">
                  Access Opportunities.
                </p>
                <p className="text-[10px] text-text-secondary leading-tight">
                  Connect, grow, and thrive.
                </p>
              </div>
            </div>
          </div>

          {/* Right — App Store + Google Play */}
          <div className="flex flex-col gap-3 items-center flex-shrink-0">
            <a href="#" aria-label="Download on App Store" className="block">
              <img
                src="/assets/AppIcons/appstore-black.png"
                alt="App Store"
                className="h-12 w-auto rounded-xl shadow-sm"
              />
            </a>
            <a href="#" aria-label="Get it on Google Play" className="block">
              <img
                src="/assets/AppIcons/playstore-black.png"
                alt="Google Play"
                className="h-12 w-auto rounded-xl shadow-sm"
              />
            </a>
          </div>
        </motion.div>

        {/* ── Feature Cards 2×2 Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`features-${selectedAudience}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="grid grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {content.features.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-5 ${
                  card.amber ? "bg-warning" : "bg-card border border-border"
                }`}
              >
                <Icon
                  name={card.icon as any}
                  size={24}
                  className={`${card.amber ? "text-white" : "text-warning"} mb-3`}
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
                {card.btn && (
                  <button className="bg-white/20 text-white rounded-full px-4 py-1 text-sm font-body-medium hover:bg-white/30 transition-smooth">
                    {card.btn}
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
