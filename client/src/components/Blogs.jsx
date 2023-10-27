import React from 'react';

const cards = [
  { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
  { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
  { title: 'Desert Destinations', copy: "It's the desert you've always dreamed of", button: 'Book Now' },
  { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
];

const CardLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto mb-40">
      {cards.map((card, index) => (
        <div key={index} className="relative rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-700 bg-white hover:bg-gray-100">
          <div
            className="h-52 md:h-80 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1517021897933-0e0319cfbc28)`,
            }}
          ></div>
          <div className="p-4 md:p-6">
            <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
            <p className="mt-4 text-gray-600">{card.copy}</p>
            <button className="mt-6 px-4 py-2 text-white font-semibold bg-black rounded-full hover:bg-gray-800 focus:outline-yellow">
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLayout;