import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import CardForm from './components/CardForm';
import CardGrid from './components/CardGrid';
import { Card } from './types';

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [showForm, setShowForm] = useState(false);

  const addCard = (card: Card) => {
    setCards([...cards, card]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[#f0f2ff] p-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#4a4a4a] mb-2">简洁、易用、更好玩 ~ ！多维表格是你的有力工具</h1>
          <p className="text-[#7b7b7b]">简洁易用，超级好玩</p>
        </div>
        {showForm ? (
          <CardForm onSubmit={addCard} onCancel={() => setShowForm(false)} />
        ) : (
          <button
            className="mb-6 flex items-center justify-center w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => setShowForm(true)}
          >
            <PlusCircle className="mr-2" />
            添加新卡片
          </button>
        )}
        <CardGrid cards={cards} />
      </div>
    </div>
  );
}

export default App;