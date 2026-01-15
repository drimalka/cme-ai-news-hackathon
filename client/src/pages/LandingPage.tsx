import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Calendar, 
  MapPin, 
  MessageSquare, 
  Code, 
  Zap,
  Trophy,
  Laptop,
  Smile,
  Key,
  ChevronDown,
  ExternalLink,
  Lightbulb,
  FileText,
  Radio,
  Bot,
  Image,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================
// COLOR SYSTEM - 4 Main Colors
// ============================================
const COLORS = {
  coral: "#F43F5E",
  blue: "#3B82F6",
  amber: "#F59E0B",
  emerald: "#10B981",
};

export default function LandingPage() {
  const [openTools, setOpenTools] = useState(false);

  return (
    <main className="min-h-screen">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="section-dark relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: Math.random() * 6 + "s",
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6">
              CME AI NEWS
              <br />
              <span className="text-gradient">HACKATHON</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Build your AI-powered newsroom in one day. An intensive hands-on hackathon 
              where you'll build a functional AI tool for your newsroom.
            </p>

            {/* Event info */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5 text-[#3B82F6]" />
                <span>Full Day Event</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-[#F59E0B]" />
                <span>9:00 – 17:00</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-[#10B981]" />
                <span>50 participants</span>
              </div>
            </div>

            {/* CTA */}
            <Button className="btn-cta text-lg h-14 px-10">
              START HACKING
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          APPROACHES SECTION
          ============================================ */}
      <section className="section-darker py-24 border-t border-white/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#F43F5E] font-semibold uppercase tracking-widest text-sm mb-4 block">
              Choose Your Path
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              Choose Your Approach
            </h2>
          </motion.div>

          {/* Main Approaches - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* AI Chatbots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${COLORS.blue}20` }}
              >
                <MessageSquare className="w-7 h-7" style={{ color: COLORS.blue }} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                AI Chatbots
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Use conversational AI to build smart assistants, content generators, 
                and research tools for your newsroom.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag tag-blue text-xs">ChatGPT</span>
                <span className="tag tag-blue text-xs">Claude</span>
                <span className="tag tag-blue text-xs">Gemini</span>
              </div>
            </motion.div>

            {/* Image Generation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-3xl p-8"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${COLORS.emerald}20` }}
              >
                <Image className="w-7 h-7" style={{ color: COLORS.emerald }} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Image Generation
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Create stunning visuals with consistent style. Learn to generate 
                and edit images for your stories and campaigns.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag tag-emerald text-xs">ChatGPT</span>
                <span className="tag tag-emerald text-xs">Copilot</span>
                <span className="tag tag-emerald text-xs">Gemini</span>
                <span className="tag tag-emerald text-xs">Freepik</span>
              </div>
            </motion.div>

            {/* Vibe Coding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-8"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${COLORS.coral}20` }}
              >
                <Code className="w-7 h-7" style={{ color: COLORS.coral }} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Vibe Coding
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Build functional apps and tools using AI-powered coding platforms. 
                No prior coding experience required.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag tag-coral text-xs">Lovable</span>
                <span className="tag tag-coral text-xs">Replit</span>
                <span className="tag tag-coral text-xs">Cursor</span>
              </div>
            </motion.div>
          </div>

          {/* Automation - smaller section for advanced users */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${COLORS.amber}20` }}
              >
                <Zap className="w-6 h-6" style={{ color: COLORS.amber }} />
              </div>
              <div>
                <h4 className="text-xl font-display font-bold text-white">
                  Automations
                </h4>
                <p className="text-gray-500 text-sm">For advanced users</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Want to connect multiple tools and automate workflows? Try building 
              with automation platforms.
            </p>
            <a 
              href="https://relay.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F59E0B] hover:text-[#FBBF24] transition-colors"
            >
              <span className="tag tag-amber">
                relay.app
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          WHAT YOU CAN BUILD - 3 Cards
          ============================================ */}
      <section className="section-dark py-24 border-t border-white/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#10B981] font-semibold uppercase tracking-widest text-sm mb-4 block">
              Inspiration
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              What You Can Build
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Content & Research */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${COLORS.blue}20` }}
              >
                <Lightbulb className="w-7 h-7" style={{ color: COLORS.blue }} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Content & Research
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  AI research assistant for journalists
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  Headline & summary generator
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  Fact-checking helper
                </li>
              </ul>
            </motion.div>

            {/* Card 2 - Tools & Dashboards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${COLORS.coral}20` }}
              >
                <FileText className="w-7 h-7" style={{ color: COLORS.coral }} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Tools & Dashboards
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#F43F5E] mt-1">•</span>
                  News monitoring dashboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F43F5E] mt-1">•</span>
                  Social media analytics tool
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F43F5E] mt-1">•</span>
                  Editorial planning app
                </li>
              </ul>
            </motion.div>

            {/* Card 3 - Automation & Bots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${COLORS.emerald}20` }}
              >
                <Bot className="w-7 h-7" style={{ color: COLORS.emerald }} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Automation & Bots
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] mt-1">•</span>
                  Automated news alerts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] mt-1">•</span>
                  Interview transcription bot
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] mt-1">•</span>
                  Content distribution workflow
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          AWARD CATEGORY
          ============================================ */}
      <section className="section-darker py-24 border-t border-white/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8"
              style={{ backgroundColor: `${COLORS.amber}20` }}
            >
              <Trophy className="w-10 h-10" style={{ color: COLORS.amber }} />
            </div>
            <span className="text-[#F59E0B] font-semibold uppercase tracking-widest text-sm mb-4 block">
              End of Day
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Showcase & Recognition
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              At the end of the hackathon, we'll showcase interesting outputs and 
              recognize the most creative and impactful projects built during the day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          WHAT YOU WILL NEED
          ============================================ */}
      <section className="section-dark py-24 border-t border-white/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#3B82F6] font-semibold uppercase tracking-widest text-sm mb-4 block">
              Be Prepared
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              What You Will Need
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Laptop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${COLORS.blue}20` }}
                >
                  <Laptop className="w-7 h-7" style={{ color: COLORS.blue }} />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Laptop
                </h3>
              </motion.div>

              {/* Good Mood */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${COLORS.amber}20` }}
                >
                  <Smile className="w-7 h-7" style={{ color: COLORS.amber }} />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Good Mood
                </h3>
              </motion.div>

              {/* AI Tools Access */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${COLORS.emerald}20` }}
                >
                  <Key className="w-7 h-7" style={{ color: COLORS.emerald }} />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  AI Tools Access
                </h3>
              </motion.div>
            </div>

            {/* Expandable Tools List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenTools(!openTools)}
                className="w-full flex items-center justify-between gap-4 p-6 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-[#F59E0B]" />
                  <span className="text-lg font-semibold text-white text-left">
                    Want to try something new? See recommended tools
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openTools ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openTools && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-6">
                      {/* AI Chatbots */}
                      <div>
                        <h4 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider mb-3">
                          AI Chatbots
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="tag tag-blue hover:scale-105 transition-transform">
                            ChatGPT <ExternalLink className="w-3 h-3" />
                          </a>
                          <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="tag tag-blue hover:scale-105 transition-transform">
                            Claude <ExternalLink className="w-3 h-3" />
                          </a>
                          <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="tag tag-blue hover:scale-105 transition-transform">
                            Gemini <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* Image Generation */}
                      <div>
                        <h4 className="text-sm font-semibold text-[#10B981] uppercase tracking-wider mb-3">
                          Image Generation
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="tag tag-emerald hover:scale-105 transition-transform">
                            ChatGPT <ExternalLink className="w-3 h-3" />
                          </a>
                          <a href="https://copilot.microsoft.com" target="_blank" rel="noopener noreferrer" className="tag tag-emerald hover:scale-105 transition-transform">
                            Copilot <ExternalLink className="w-3 h-3" />
                          </a>
                          <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="tag tag-emerald hover:scale-105 transition-transform">
                            Gemini <ExternalLink className="w-3 h-3" />
                          </a>
                          <a href="https://www.freepik.com/ai" target="_blank" rel="noopener noreferrer" className="tag tag-emerald hover:scale-105 transition-transform">
                            Freepik <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* Vibe Coding */}
                      <div>
                        <h4 className="text-sm font-semibold text-[#F43F5E] uppercase tracking-wider mb-3">
                          Vibe Coding
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="tag tag-coral hover:scale-105 transition-transform">
                            Lovable <ExternalLink className="w-3 h-3" />
                          </a>
                          <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="tag tag-coral hover:scale-105 transition-transform">
                            Replit <ExternalLink className="w-3 h-3" />
                          </a>
                          <a href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="tag tag-coral hover:scale-105 transition-transform">
                            Cursor <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* Automation */}
                      <div>
                        <h4 className="text-sm font-semibold text-[#F59E0B] uppercase tracking-wider mb-3">
                          Automation
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <a href="https://relay.app" target="_blank" rel="noopener noreferrer" className="tag tag-amber hover:scale-105 transition-transform">
                            relay.app <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Note about morning setup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <p className="text-gray-400 text-sm">
                <span className="text-[#10B981]">*</span> We can help you set up 
                accounts in the morning before the event. You'll receive setup 
                instructions beforehand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="section-darker py-24 relative overflow-hidden border-t border-white/5">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-[#F43F5E]/20 rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Ready to Build?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Join us and create your own AI tool for your newsroom. 
              Leave with a working solution ready to use.
            </p>
            <Button className="btn-cta text-xl h-16 px-12">
              START HACKING
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="section-dark py-12 border-t border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#F43F5E] flex items-center justify-center">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-white text-lg">
                CME AI News Hackathon
              </span>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2026 CME. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
