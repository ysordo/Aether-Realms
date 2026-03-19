import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@shared/ui/FadeIn";
import { LazyImage } from "@shared/ui/LazyImage";
import { STRATEGY_BOARD } from "@shared/constants";
import { CheckCircle } from "lucide-react";

export function EpicStrategySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const features = [
    {
      icon: "check_circle",
      text: "Dynamic environment tiles that react to your magic.",
    },
    {
      icon: "check_circle",
      text: "Turn-based combat with real-time VR interactions.",
    },
    {
      icon: "check_circle",
      text: "Global leaderboards for the ultimate tacticians.",
    },
  ];

  return (
    <section ref={ref} className="bg-base-100 py-24! px-6! lg:px-40!">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ y, opacity }} className="order-2 lg:order-1">
          <FadeIn direction="right" delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-linear-to-r from-primary to-accent-gold rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000" />
              <div className="relative rounded-xl gold-border shadow-2xl overflow-hidden">
                <LazyImage
                  src={STRATEGY_BOARD}
                  alt="Strategy board"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>
          </FadeIn>
        </motion.div>
        <motion.div style={{ opacity }} className="order-1 lg:order-2">
          <FadeIn direction="left" delay={0.3}>
            <motion.div className="flex items-center gap-2">
              <motion.div
                className="h-1 w-12 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
                Arcane Mastery
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-base-content leading-tight uppercase italic">
              Epic Strategy
            </h2>
            <p className="text-base-content/50 text-lg leading-relaxed">
              Master the board with tactical precision and arcane power. Every
              tile holds a secret, every move defines your legacy in the
              shattered world of Aether.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <FadeIn key={index} direction="up" delay={0.4 + index * 0.1}>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      name={feature.icon}
                      className="text-gold shrink-0"
                    />
                    <span className="text-base-content/80">{feature.text}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}
