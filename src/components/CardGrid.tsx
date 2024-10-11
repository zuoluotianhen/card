import React from 'react';
import { Card } from '../types';

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'ai工具':
        return 'bg-[#ffe4e1] text-[#ff6347]';
      case '绿色工具':
        return 'bg-[#e6ffe6] text-[#2e8b57]';
      default:
        return 'bg-[#e6f2ff] text-[#4169e1]';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col">
          <h3 className="text-lg font-semibold text-[#4a4a4a] mb-2">{card.title}</h3>
          <p className="text-[#7b7b7b] text-sm flex-grow mb-4">{card.description}</p>
          <div className="flex items-center space-x-2">
            {card.tag && (
              <span className={`text-xs px-2 py-1 rounded ${getTagColor(card.tag)}`}>
                {card.tag}
              </span>
            )}
            {card.link && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2 py-1 rounded bg-[#e6f2ff] text-[#4169e1] hover:bg-[#4169e1] hover:text-white transition-colors"
              >
                去体验
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;