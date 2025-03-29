'use client';

import { useState } from "react";
import { LoadCardsFromJson } from "@/features/cards/model/use-cards";
import { cardsData } from "@/shared/lib/cards-data";

export const Cards = () => {
  const [cards] = useState(LoadCardsFromJson(cardsData));

  return (
    <div className="flex justify-center flex-wrap gap-4 md:justify-normal">
      {cards.map((card) => (
        <div
          key={card.id}
          style={{ backgroundImage: `url(${card.background})` }}
          className="relative w-[240px] h-[300px] rounded-[10px] bg-cover bg-center group overflow-hidden"
        >
          {/* Аватар */}
          <div className="flex flex-col items-center gap-1">
            <img
              className="w-[90px] h-[90px] object-cover"
              src={card.avatar}
              alt={card.avatarAlt}
            />
            <p className="text-[20px] text-white font-bold uppercase tracking-[2px]">
              {card.title}
            </p>
            <div className="flex items-center gap-1">
              <img src={card.statusIcon} alt="" />
              <span className="text-[8px] text-white font-bold uppercase">
                {card.statusText}
              </span>
            </div>
          </div>

          {/* Текст описания */}
          <div className="absolute bottom-0 left-0 w-full h-0 rounded-t-[20px] backdrop-blur-[56px] bg-gradient-to-b from-[rgba(126,126,126,0.116)] to-[rgba(126,126,126,0.4)] text-center overflow-hidden transition-all duration-300 ease-in-out group-hover:h-[130px]">
            <p className="text-[16px] text-white font-medium mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {card.title}
            </p>
            <p className="text-[10px] text-white group-hover:opacity-100 transition-opacity duration-300">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
