import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Input from "../../../components/ui/Input";
import { FAQItem, AudienceType } from "../types";

interface FAQSectionProps {
  selectedAudience: AudienceType["id"];
}

const FAQSection = ({ selectedAudience }: FAQSectionProps) => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const faqData: FAQItem[] = [
    // Worker FAQs
    {
      id: "worker-1",
      question: "Do workers pay commission?",
      answer: `For physical tasks, workers never pay commission — keep 100% of your earnings. For digital tasks (Videography, App Dev, Web Dev, Resume/CV), a service fee of 8–10% applies only when the task value exceeds ₹5,000. Below ₹5,000, the commission is paid by the poster. ManaSetu is free to join — sign up, verify, and start earning today.`,
      audience: ["worker"],
      category: "pricing",
    },
    {
      id: "worker-2",
      question: "How does the worker rewards program work?",
      answer: `Complete tasks to unlock rewards: 25 tasks = free ManaSetu-branded t-shirt, 50 tasks = free ManaSetu hoodie, 100 tasks = verified badge. Accept an internship opportunity and earn 1,000 bonus credits; decline and still receive a standard 500 credits bonus. Rewards improve your visibility and help you get more task offers.`,
      audience: ["worker"],
      category: "rewards",
    },
    {
      id: "worker-3",
      question: "How do credits and referral bonuses work?",
      answer: `Earn credits by completing tasks and referring others. Referrers earn ₹100 when their referee completes their first task. 100 credits = ₹1. Workers can top up their wallet from as low as ₹50 (5,000 credits). Credits can be redeemed for discounts, cash in wallet, or special offers. Credits redemption is available from V1.`,
      audience: ["worker"],
      category: "credits",
    },
    {
      id: "worker-4",
      question: "How do I get a verified badge?",
      answer: `Workers earn a verified badge after completing 100 tasks. Verified workers are shown first in listings, get higher matching priority, and have better visibility. This helps you get more and better-paying tasks.`,
      audience: ["worker"],
      category: "verification",
    },
    {
      id: "worker-5",
      question: "When do I get paid?",
      answer: `Payments are instant via UPI after task completion and approval. Payments are secured in escrow before you start work, so you're guaranteed payment. If the actual grocery bill is less than the estimate, you still get paid the full amount - the refund goes to the business.`,
      audience: ["worker"],
      category: "payment",
    },
    {
      id: "worker-6",
      question: "What types of tasks are available?",
      answer: `We launched V1 with 11 core categories: Groceries & Vegetables, Fruits & Vegetables (Premium), Photography Services, Videography Services, Influencer Marketing, Editing Services, Web Development, App Development, Assignment Writing, Resume & CV Preparation, and Graphic Design. We intentionally cover both everyday errands plus digital and professional services. In V2, we will add more B2B and professional services.`,
      audience: ["worker"],
      category: "tasks",
    },

    // Business FAQs
    {
      id: "business-1",
      question: "How do subscription plans work?",
      answer: `Choose from four plans: FREE (₹0, 6% commission on all tasks, no carry-over), STARTER (₹199/month, ₹3,000 limit, zero commission within limit), PRO (₹399/month, ₹6,000 limit, zero commission within limit, 24-hour support), or PREMIUM (₹599/month, ₹9,000 limit, zero commission within limit, priority support). Unused limits on paid plans carry over up to 3 months. If your total task value exceeds your plan limit, only the extra amount is charged a 6% platform fee. Upgrades apply instantly with prorated charges; downgrades take effect from your next billing cycle.`,
      audience: ["business"],
      category: "pricing",
    },
    {
      id: "business-2",
      question: "How are delivery fees calculated?",
      answer: `Delivery fees start from fixed base rates by distance: 0–1 km = ₹20, 1–3 km = ₹30, 3–5 km = ₹40, 5–10 km = ₹55, 10+ km = ₹75. Final fee = Base Fee × (Actual Cost / Estimated Cost), with a safety range of 80–120% of the base fee. If the actual bill is lower, your delivery fee is reduced but never below 80% of base. Any overage is refunded proportionally.`,
      audience: ["business"],
      category: "fees",
    },
    {
      id: "business-3",
      question: "How does AI invoice generation work?",
      answer: `Our AI generates upfront estimated price invoices based on real-time online price data. We apply a smart location-based buffer: +20% in metro cities (Bangalore, Hyderabad, Chennai, Delhi, Mumbai), +15% in major Tier-2 cities (Pune, Jaipur, Lucknow, etc.), and +12% in Tirupati and similar Tier-2 locations. Metro cities have higher buffers due to price volatility and stock availability issues. If the actual bill is less than the estimate, the unused buffer is automatically refunded.`,
      audience: ["business"],
      category: "invoice",
    },
    {
      id: "business-4",
      question: "How does escrow and refunds work?",
      answer: `Payments are locked in escrow when you approve the AI-generated invoice. For each task in V1, you select a single store to simplify verification. When the worker completes the task and uploads the receipt, the system compares actual vs estimated bill. Buffer and delivery fee are recalculated using our formula, and any overage is refunded. Escrow is released within about 2 hours after status COMPLETED, once delivery is confirmed, receipt verified, and no dispute is raised.`,
      audience: ["business"],
      category: "payment",
    },
    {
      id: "business-5",
      question:
        "What happens if my actual grocery bill is more than estimated?",
      answer: `If the actual bill exceeds the estimate, you only pay the estimated amount (the buffer covers the difference). However, if it exceeds significantly, you may need to approve an additional payment. The system will notify you and you can approve or dispute the difference.`,
      audience: ["business"],
      category: "invoice",
    },
    {
      id: "business-6",
      question: "How do subscription limits and carry-over work?",
      answer: `For paid plans (STARTER/PRO/PREMIUM), your monthly limit (₹3,000, ₹6,000, or ₹9,000) resets each month and unused balance carries over up to 3 months. For example, if you have ₹1,000 unused in month 1, it carries to month 2. After 3 months, unused limits expire. If tasks exceed the monthly limit, a 6% platform fee is applied only on the extra amount. The FREE plan (₹0) does not support carry-over.`,
      audience: ["business"],
      category: "pricing",
    },
    {
      id: "business-7",
      question: "Can I change or upgrade my subscription mid-month?",
      answer: `Yes! You can upgrade your plan anytime. When you upgrade, you get the new limit immediately and pay a prorated amount for the remaining days. Downgrades take effect at the start of the next billing cycle. Contact support for assistance with subscription changes.`,
      audience: ["business"],
      category: "pricing",
    },
    {
      id: "business-8",
      question: "How do I get a verified badge?",
      answer: `Businesses subscribed to PRO (₹399) or PREMIUM (₹599) plans are eligible for verified badges. Verified businesses are shown first in worker listings, get higher matching priority, and build more trust with workers.`,
      audience: ["business"],
      category: "verification",
    },
    {
      id: "business-9",
      question: "Who pays commission - me or the worker?",
      answer: `For physical tasks, only task posters (businesses) pay platform fees — workers keep 100%. For digital tasks, workers pay 8–10% when the task exceeds ₹5,000; below ₹5,000 the poster pays. On the business side, FREE plan users pay 6% on all tasks. Paid subscribers (STARTER/PRO/PREMIUM) pay zero commission within their monthly limit, then 6% on the overage amount.`,
      audience: ["business"],
      category: "pricing",
    },

    // Investor FAQs
    {
      id: "investor-1",
      question: "How can I invest or partner with ManaSetu?",
      answer: `We're currently building our partnership program. Join our waitlist to get early access to future investment rounds and partnership opportunities. You'll receive regular platform updates, market insights, metrics, and priority notifications about investment and business collaboration opportunities.`,
      audience: ["investor"],
      category: "investment",
    },
    {
      id: "investor-2",
      question: "What business partnership options are available?",
      answer: `We offer custom business partnerships including API integrations, white-label solutions, bulk task management, co-marketing opportunities, and revenue sharing options. Contact us to discuss custom partnership terms that fit your needs.`,
      audience: ["investor"],
      category: "partnership",
    },
    {
      id: "investor-3",
      question: "What makes ManaSetu different?",
      answer: `ManaSetu's AI-powered invoicing, dynamic delivery fees, transparent escrow system with automatic refunds, worker rewards program, and flexible subscription model create a unique value proposition. We focus on transparency, fairness, and user-centric design with verified users and instant UPI payments.`,
      audience: ["investor"],
      category: "competitive",
    },

    // General FAQs
    {
      id: "general-1",
      question: "How are delivery fees calculated and refunded?",
      answer: `Delivery fees have fixed base rates by distance: 0–1 km = ₹20, 1–3 km = ₹30, 3–5 km = ₹40, 5–10 km = ₹55, 10+ km = ₹75. Final fee = Base Fee × (Actual Cost / Estimated Cost), with floor at 80% and ceiling at 120% of base. If the bill is 20% less than estimated, you get proportional refund on delivery fee. Buffer and delivery fees are recalculated; any overage refunded to poster, rest paid to worker via instant UPI.`,
      audience: ["worker", "business"],
      category: "fees",
    },
    {
      id: "general-2",
      question: "How does the escrow system protect me?",
      answer: `Payments are locked in escrow when the business approves the invoice. In V1, posters select a single store per task for transparent distance, delivery fee, and receipt verification. Escrow is released within about 2 hours after status COMPLETED, once delivery is confirmed, receipt verified, and no dispute raised. If there's a dispute, our team mediates. Buffer and delivery fees are recalculated and overage refunded automatically.`,
      audience: ["worker", "business"],
      category: "payment",
    },
    {
      id: "general-3",
      question: "What task categories are available?",
      answer: `We launched V1 with 11 core categories: Groceries & Vegetables, Fruits & Vegetables (Premium), Photography Services, Videography Services, Influencer Marketing, Editing Services, Web Development, App Development, Assignment Writing, Resume & CV Preparation, and Graphic Design. We intentionally avoid focusing only on groceries due to market saturation. In V2, we will add more B2B and professional services such as Project Research Support and Medical Consulting. For digital tasks like development and design, we use in-app file sharing with 24–48 hour review periods.`,
      audience: ["worker", "business"],
      category: "tasks",
    },
    {
      id: "general-4",
      question: "How do credits work for both posters and workers?",
      answer: `Both posters and workers earn credits by using the platform. Workers: 100 credits = ₹1, can top up from ₹50 (5,000 credits), redeemable for rewards, bonuses, offers, or cash to wallet. Note: for digital tasks above ₹5,000, the worker's 8–10% service fee is deducted before payout. Posters: Credits can be used for up to 50% subscription discount or for commission reduction on overage amounts. Referral bonuses: Referrer earns ₹100 when referee completes first task (workers) or posts first task (posters). Credits redemption is available from V1.`,
      audience: ["worker", "business"],
      category: "credits",
    },
    {
      id: "general-5",
      question: "Is ManaSetu available in my city?",
      answer: `We currently operate in 25+ cities across India including Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Pune, and expanding rapidly. We focus on tier-1 and tier-2 cities with strong educational institutions. Check our website for the latest city availability or express interest for your city.`,
      audience: ["worker", "business", "investor"],
      category: "availability",
    },
    {
      id: "general-6",
      question: "How do I contact customer support?",
      answer: `Our support team is available 24/7 through multiple channels: in-app chat, WhatsApp, and email (workearn.community@gmail.com). Subscribers get priority support. Average response time is under 2 hours. For urgent issues, use in-app chat for fastest response.`,
      audience: ["worker", "business", "investor"],
      category: "support",
    },
  ];

  // Filter FAQs based on audience and search
  const filteredFAQs = faqData.filter((faq) => {
    const matchesAudience = faq.audience.includes(selectedAudience);
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;

    return matchesAudience && matchesSearch && matchesCategory;
  });

  // Get unique categories for current audience
  const categories = [
    "all",
    ...new Set(
      faqData
        .filter((faq) => faq.audience.includes(selectedAudience))
        .map((faq) => faq.category)
    ),
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-body-medium mb-6"
          >
            <Icon name="HelpCircle" size={16} />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading-bold text-foreground mb-6"
          >
            Got Questions? We've Got
            <span className="text-primary"> Answers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            {selectedAudience === "worker" &&
              "Everything you need to know about earning on our platform, from verification to payments."}
            {selectedAudience === "business" &&
              "Learn how to find quality talent, manage projects, and ensure successful task completion."}
            {selectedAudience === "investor" &&
              "Understand our investment opportunities, returns, and growth potential in detail."}
          </motion.p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all"
                      ? "All Categories"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-text-secondary mb-6">
            Showing {filteredFAQs.length}{" "}
            {filteredFAQs.length === 1 ? "question" : "questions"}
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card-hover transition-card"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-smooth"
                  >
                    <h3 className="font-heading-bold text-foreground pr-4 leading-relaxed">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <Icon
                        name="ChevronDown"
                        size={20}
                        className="text-text-secondary"
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-border">
                          <div className="pt-4">
                            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </p>

                            {/* Category Tag */}
                            <div className="mt-4">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body-medium bg-primary/10 text-primary">
                                {faq.category.charAt(0).toUpperCase() +
                                  faq.category.slice(1)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={32} className="text-text-secondary" />
              </div>
              <h3 className="font-heading-bold text-foreground mb-2">
                No questions found
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-primary hover:text-primary/80 font-body-medium"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} className="text-white" />
            </div>

            <h3 className="text-2xl font-heading-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Our support team is here to help you 24/7. Get personalized
              assistance for your specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Clock" size={16} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Zap" size={16} />
                <span>&lt;2 Hour Response</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Users" size={16} />
                <span>Expert Team</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              <a
                href="mailto:workearn.community@gmail.com"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-body-medium hover:bg-primary/90 transition-smooth"
              >
                <Icon name="Mail" size={16} />
                <span>Email Support</span>
              </a>
              <a
                href="https://wa.me/9502414128"
                className="inline-flex items-center space-x-2 bg-success text-white px-6 py-3 rounded-xl font-body-medium hover:bg-success/90 transition-smooth"
              >
                <Icon name="MessageCircle" size={16} />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
