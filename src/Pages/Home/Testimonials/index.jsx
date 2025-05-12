import { motion, useInView } from "framer-motion";
import { Zap, Database, BarChart } from "lucide-react";
import { testimonials } from "./testimonials";

export default function Testimonials() {
    const getPillarIcon = (pillar) => {
        switch (pillar) {
            case "Automation":
                return <Zap className="w-3 h-3 text-c-zinc" />;
            case "Integration":
                return <Database className="w-3 h-3 text-c-zinc" />;
            case "Insights":
                return <BarChart className="w-3 h-3 text-c-zinc" />;
            default:
                return null;
        }
    };

    return (
        <section className="relative bg-black py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="h2 text-white"
                    >
                        What Our Customers Are Saying?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-gray-400 text-lg"
                    >
                        Real impact. Real results.
                    </motion.p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 blurb-shadow"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-white font-semibold">{t.name}</h4>
                                    <p className="text-zinc-400 text-sm">
                                        {t.role} @ {t.company}
                                    </p>
                                </div>
                            </div>

                            <p className="text-zinc-300 text-sm mb-4">{t.content}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {t.pillars.map((pillar) => (
                                    <span
                                        key={pillar}
                                        className="flex items-center gap-1 text-xs text-c-zinc border border-c-zinc px-2 py-1 rounded-full"
                                    >
                                        {getPillarIcon(pillar)} {pillar}
                                    </span>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
