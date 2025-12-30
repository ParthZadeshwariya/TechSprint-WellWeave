
import { motion } from "framer-motion";
import { Brain, Heart, MessageCircle } from "lucide-react";

interface FeatureCardsProps {
    onNavigate: (view: "journal" | "meditation") => void;
}

const FeatureCards = ({ onNavigate }: FeatureCardsProps) => {
    const features = [
        {
            icon: <Brain className="w-8 h-8 text-primary" />,
            title: <span className="text-foreground font-semibold">Thought Visualization</span>,
            description: "See your thoughts come alive in a dynamic 3D mind graph. Connect concepts and find clarity.",
            action: () => onNavigate("journal"),
            delay: 0.1,
        },
        {
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            title: <span className="text-foreground font-semibold">Meditation Space</span>,
            description: "Find your calm with guided breathing and soothing ambiance. A sanctuary for your mind.",
            action: () => onNavigate("meditation"),
            delay: 0.2,
        },
        {
            icon: <MessageCircle className="w-8 h-8 text-indigo-500" />,
            title: <span className="text-foreground font-semibold">AI Guide</span>,
            description: "Chat with an empathetic AI companion who understands your context and offers gentle support.",
            action: () => onNavigate("journal"), // Links to journal for now as chat is part of it
            delay: 0.3,
        },
    ];

    return (
        <section id="features" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Explore Your Wellness Tools</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Powerful tools designed to help you understand yourself better and find balance in your daily life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                            onClick={feature.action}
                            className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/20 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
