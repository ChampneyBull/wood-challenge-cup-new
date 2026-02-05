import { motion } from 'framer-motion';
import { MapPin, Trophy, MapPinned } from 'lucide-react';
import type { Event } from '../data/events';

interface EventCardProps {
    event: Event;
    index: number;
    isFlipped: boolean;
    onFlip: () => void;
}

export function EventCard({ event, index, isFlipped, onFlip }: EventCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            style={{ perspective: '1000px', zIndex: isFlipped ? 50 : 0, position: 'relative' }}
        >
            <motion.div
                className="relative w-full cursor-pointer"
                style={{ transformStyle: 'preserve-3d', minHeight: '200px' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                onClick={onFlip}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                {/* Front of card */}
                <div
                    className="absolute w-full bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl p-6 border-t-4 border-gold-500 transition-shadow duration-300 overflow-hidden group"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        opacity: isFlipped ? 0 : 1,
                        pointerEvents: isFlipped ? 'none' : 'auto'
                    }}
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
                </div>

                {/* Back of card */}
                <div
                    className="absolute w-full bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl p-6 border-t-4 border-golf-500 transition-shadow duration-300 overflow-hidden group"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        opacity: isFlipped ? 1 : 0,
                        pointerEvents: isFlipped ? 'auto' : 'none'
                    }}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <MapPinned className="w-24 h-24 text-golf-500" />
                    </div>

                    <div className="relative z-10 flex flex-col">
                        <div className="flex justify-between items-baseline mb-4">
                            <span className="text-3xl font-bold text-gray-200 dark:text-slate-800 group-hover:text-golf-100 dark:group-hover:text-slate-700 transition-colors">
                                {event.year}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 group-hover:text-golf-600 dark:group-hover:text-gold-400 transition-colors">
                            Courses Played
                        </h3>

                        {event.courses && event.courses.length > 0 ? (
                            <div className="grid grid-cols-2 gap-x-2 gap-y-4 flex-1 mt-2">
                                {event.courses.map((course, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center">
                                        <MapPinned className="w-5 h-5 text-golf-500 mb-1" />
                                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 line-clamp-2">
                                            {course}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                                Course information not available
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
