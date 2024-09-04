"use client"
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <nav className="flex gap-4 mb-8">
        <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Tools</button>
        <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Eklenen Görevler</button>
        <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Eklenen Hesaplar</button>
        <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">İstatistik</button>
      </nav>

      <div>
        <h1 className="text-2xl mb-6">Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Kartlar */}
          {cards.map((card) => (
            <div key={card.title} className="bg-gray-800 rounded-lg shadow p-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const cards = [
  {
    title: 'Takipçi İşlemleri',
    description: 'Takipçi işlemleri için otomasyonlar oluşturabilirsiniz.',
    image: '/images/1.png', 
  },
  {
    title: 'Beğeni İşlemleri',
    description: 'Beğeni otomasyonları oluşturabilirsiniz.',
    image: '/images/2.png',
  },
  {
    title: 'Veri Toplama',
    description: 'Hesapların mail, telefon gibi verilerini toplayabilirsiniz.',
    image: '/images/3.png',
  },
  {
    title: 'Zaman Ayarlı Gönderi Paylaş',
    description: 'Belirli gün ve saatlerde gönderi paylaşımı planlayabilirsiniz.',
    image: '/images/4.png',
  },
  {
    title: 'Hızlı Gönderi Paylaş',
    description: 'Hemen gönderi paylaşabilirsiniz.',
    image: '/images/5.png',
  },
];

export default Home;
