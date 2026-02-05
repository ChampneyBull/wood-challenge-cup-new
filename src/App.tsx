import { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { EventCard } from './components/EventCard';
import { events } from './data/events';

function App() {
  const [flippedCardYear, setFlippedCardYear] = useState<number | null>(null);

  const handleCardFlip = (year: number) => {
    // If clicking the same card, flip it back. Otherwise, flip the new card
    setFlippedCardYear(flippedCardYear === year ? null : year);
  };

  return (
    <Layout>
      <Hero />
      <section className="container mx-auto px-4 py-20 -mt-20 relative z-30">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">-- Hall of Champions --</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Honoring the winners who have etched their names in the history of the Wood Challenge Cup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={event.year}
              event={event}
              index={index}
              isFlipped={flippedCardYear === event.year}
              onFlip={() => handleCardFlip(event.year)}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default App;
