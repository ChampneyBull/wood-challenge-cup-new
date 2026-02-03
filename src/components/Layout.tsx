import type { ReactNode } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Trophy } from 'lucide-react';
import texture from '../assets/texture.png';

interface LayoutProps {
    children: ReactNode;
}

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-gold-500" />
                    <span className="font-serif font-bold text-xl text-golf-900 dark:text-golf-100">
                        Wood Challenge Cup
                    </span>
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="py-8 bg-gray-100 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-slate-400">
                <p>© {new Date().getFullYear()} Wood Challenge Cup. All rights reserved.</p>
                <p className="mt-1">Celebrating Golfing Excellence Since 1999</p>
            </div>
        </footer>
    );
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-x-hidden">
            <div
                className="fixed inset-0 z-0 opacity-40 dark:opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-overlay"
                style={{ backgroundImage: `url(${texture})`, backgroundSize: '400px' }}
            />

            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}
