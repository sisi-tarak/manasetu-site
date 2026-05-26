import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";
import { AudienceType, HeroCardData } from "../types";

interface HeroSectionProps {
  selectedAudience: AudienceType["id"];
  onAudienceChange: (audience: AudienceType["id"]) => void;
}

const HeroSection = ({
  selectedAudience,
  onAudienceChange,
}: HeroSectionProps) => {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  const audienceTypes: AudienceType[] = [
    {
      id: "worker",
      label: "Student/Worker",
      shortLabel: "W",
      icon: "Users",
      description: "Earn flexible income",
      color: "text-success",
      heroTitle: "Zero Commission on Physical Tasks",
      heroSubtitle:
        "Join 10,000+ students earning ₹10,000+/month. Keep 100% on physical tasks; 8–10% service fee only on digital tasks above ₹5,000. Earn rewards, badges, and bonuses.",
      ctaText: "Start Earning Now",
      benefits: [
        "Zero commission on physical tasks",
        "Instant UPI payments",
        "Worker rewards program",
      ],
    },
    {
      id: "business",
      label: "Business",
      shortLabel: "B",
      icon: "Building2",
      description: "Find verified talent",
      color: "text-secondary",
      heroTitle: "Smart Subscription Plans for Task Posting",
      heroSubtitle:
        "Workers earn 100% with zero commission. Businesses use smart subscription plans (₹199/₹399/₹599) with AI-powered cost estimation and escrow-protected tasks.",
      ctaText: "View Pricing Plans",
      benefits: [
        "Smart subscription plans",
        "AI invoice & escrow protection",
        "Dynamic delivery fees",
      ],
    },
    {
      id: "investor",
      label: "Investor",
      shortLabel: "I",
      icon: "TrendingUp",
      description: "High-growth investment",
      color: "text-warning",
      heroTitle: "Join Our Partnership Waitlist",
      heroSubtitle:
        "Interested in partnering with ManaSetu? Join our waitlist for future investment opportunities and business collaborations.",
      ctaText: "Join Waitlist",
      benefits: [
        "Early access to opportunities",
        "Market insights",
        "Partnership options",
      ],
    },
  ];

  const heroCards: HeroCardData[] = [
    {
      audience: "worker",
      title: "₹10,000+/month",
      subtitle: "Flexible Income",
      highlight: "Zero Commission on Physical Tasks",
      icon: "Wallet",
      gradient: "from-success to-success/70",
      features: [
        "Instant UPI payments",
        "Worker rewards program",
        "8–10% only on digital >₹5K",
      ],
    },
    {
      audience: "business",
      title: "Verified Talent",
      subtitle: "Zero Hassle",
      highlight: "Smart Subscription Plans",
      icon: "Shield",
      gradient: "from-secondary to-secondary/70",
      features: [
        "AI invoice & escrow protection",
        "Dynamic delivery fees",
        "3-tier location-based buffers",
      ],
    },
    {
      audience: "investor",
      title: "15-25x Returns",
      subtitle: "Growth Potential",
      highlight: "Partnership Waitlist",
      icon: "TrendingUp",
      gradient: "from-warning to-warning/70",
      features: [
        "Early access",
        "Market insights",
        "Partnership opportunities",
      ],
    },
  ];

  const currentAudience =
    audienceTypes.find((a) => a.id === selectedAudience) || audienceTypes[0];

  const headlines = [
    currentAudience.heroTitle,
    `Join India's Most Trusted Gig Platform`,
    currentAudience.id === "worker"
      ? "Earn Rewards, Badges & Bonuses"
      : currentAudience.id === "business"
        ? "AI-Powered Invoicing & Dynamic Fees"
        : "Join Our Growing Platform",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <section
      id="for-you"
      className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 overflow-hidden"
    >
      {/* Animated ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-[8%] w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div
          className="absolute top-2/3 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <div className="flex-1 lg:pr-12 text-center lg:text-left">
            {/* Dynamic Headlines */}
            <div className="2xl:mb-10 mb-10 sm:mb-6 md:mb-10 lg:mb-16 h-20 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading-extra-bold text-foreground leading-tight"
                >
                  {headlines[currentHeadline]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {currentAudience.heroSubtitle}
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              {currentAudience.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 shadow-sm"
                >
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm font-body-medium text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="animate-pulse-cta shadow-cta text-lg px-8 py-4"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("get-started");
                  if (element) {
                    const headerHeight = 64;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {currentAudience.ctaText}
              </Button>

              {selectedAudience === "worker" && (
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-text-secondary">
                  <Image
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1272f1b41-1762624831669.png"
                    alt="UPI payment logo for instant money transfers"
                    className="w-8 h-6"
                  />

                  <span>Instant UPI Payments</span>
                </div>
              )}
            </motion.div>

            {/* Trust Indicators - Projected Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-text-secondary mb-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-success" />
                  <span>Target: 10,000+ Tasks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Star"
                    size={16}
                    className="text-warning fill-current"
                  />
                  <span>Target: 4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-secondary" />
                  <span>Target: 100% Verified</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary italic">
                * Projected goals for Year 1
              </p>
            </motion.div>
          </div>

          {/* Right Content - Audience Selector Cards */}
          <div className="flex-1 mt-12 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 max-w-md mx-auto">
              {heroCards.map((card, index) => (
                <motion.div
                  key={card.audience}
                  initial={{ opacity: 0, x: 50, rotateY: -15 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    scale: selectedAudience === card.audience ? 1.05 : 1,
                  }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.08,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  className={`relative cursor-pointer transition-card ${selectedAudience === card.audience
                    ? "ring-2 ring-primary shadow-card-hover"
                    : "hover:shadow-card-hover"
                    }`}
                  onClick={() => onAudienceChange(card.audience)}
                >
                  <div
                    className={`bg-gradient-to-br ${card.gradient} p-6 rounded-2xl text-white relative overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <Icon
                          name={card.icon}
                          size={32}
                          className="text-white"
                        />
                        {selectedAudience === card.audience && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                          >
                            <Icon
                              name="Check"
                              size={16}
                              className="text-success"
                            />
                          </motion.div>
                        )}
                      </div>

                      <h3 className="text-2xl font-heading-bold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-white/90 mb-4">{card.subtitle}</p>

                      <div className="bg-white/20 rounded-lg p-3 mb-4">
                        <p className="text-sm font-body-medium">
                          {card.highlight}
                        </p>
                      </div>

                      <ul className="space-y-2">
                        {card.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <Icon
                              name="Check"
                              size={14}
                              className="text-white"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity rounded-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Audience Selector */}
            <div className="md:hidden mt-8">
              <div className="flex justify-center space-x-2">
                {audienceTypes.map((audience) => (
                  <button
                    key={audience.id}
                    onClick={() => onAudienceChange(audience.id)}
                    className={`w-3 h-3 rounded-full transition-smooth ${selectedAudience === audience.id
                      ? "bg-primary"
                      : "bg-border hover:bg-accent"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
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
    </section >
  );
};

export default HeroSection;
