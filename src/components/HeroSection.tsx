
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import DailyMoodCheck from "./DailyMoodCheck";

interface HeroSectionProps {
  onStartJourney: () => void;
  onMeditate: () => void;
}

const HeroSection = ({ onStartJourney, onMeditate }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">AI-Powered Mental Wellness</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Untangle Your <br />
            <span className="text-gradient">Inner World</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            A safe space to visualize your thoughts, understand your emotions, and find clarity through AI-guided journaling and meditation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 text-lg h-12 w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
              onClick={onStartJourney}
            >
              Start Journaling <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-lg h-12 w-full sm:w-auto bg-white/50 hover:bg-white/80"
              onClick={onMeditate}
            >
              Meditate Now
            </Button>
          </div>

          <DailyMoodCheck />
        </motion.div>

        {/* Placeholder for a hero image or visualization preview */}
      </div>
    </section>
  );
};

export default HeroSection;