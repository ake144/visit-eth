import  { useState, useEffect } from 'react';
import { proverbs } from '@/lib/data';


const ProverbCard = () => {
  const [currentProverb, setCurrentProverb] = useState(proverbs[0]);

  // Rotate proverbs every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProverb((prevProverb) => {
        const currentIndex = proverbs.indexOf(prevProverb);
        const nextIndex = (currentIndex + 1) % proverbs.length;
        return proverbs[nextIndex];
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center mt-6">
      <h3 className="text-2xl font-semibold text-gray-700">Ethiopian Proverb</h3>
      <p className="mt-4 text-xl italic text-gray-500">"{currentProverb}"</p>
    </div>
  );
};

export default ProverbCard;
