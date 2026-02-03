import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

export function Hero() {
    return (
        <section className="relative h-[70vh] flex items-center justify-center bg-golf-900 overflow-hidden">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-gray-50 dark:to-slate-950 z-10" />

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[20s] hover:scale-105"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold tracking-wider uppercase backdrop-blur-sm border border-gold-500/30">
                        Est. 1999
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                        Wood Challenge <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Cup</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        A tradition of golfing excellence, spanning over two decades of competition and camaraderie.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
