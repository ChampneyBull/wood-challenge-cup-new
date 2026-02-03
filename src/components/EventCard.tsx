import { motion } from 'framer-motion';
import { MapPin, Trophy } from 'lucide-react';
import type { Event } from '../data/events';

interface EventCardProps {
    event: Event;
    index: number;
}

export function EventCard({ event, index }: EventCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl p-6 border-t-4 border-gold-500 transition-shadow duration-300 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-24 h-24 text-golf-500" />
            </div>

            <div className="relative z-10">
                <div className="flex justify-between items-baseline mb-4">
                    <span className="text-5xl font-bold text-gray-200 dark:text-slate-800 group-hover:text-golf-100 dark:group-hover:text-slate-700 transition-colors">
                        {event.year}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-golf-600 dark:group-hover:text-gold-400 transition-colors">
                    {event.winner}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4 text-golf-500" />
                    <span className="text-sm font-medium uppercase tracking-wide">{event.location}</span>
                </div>
            </div>
        </motion.div>
    );
}
