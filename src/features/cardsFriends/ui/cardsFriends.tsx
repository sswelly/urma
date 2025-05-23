'use client';

import { useState } from "react";
import { LoadCardsFromJson } from "@/features/cards/model/use-cards";
import Link from "next/link";
import { cardsFriendsData } from "@/shared/lib/cardsFriends-data";

export const CardsFriends = () => {
  const [cards] = useState(LoadCardsFromJson(cardsFriendsData));

  return (
    <div className="flex justify-center flex-wrap gap-4 md:justify-normal">
      {cards.map((card) => (
        <div
          key={card.id}
          style={{ backgroundImage: `url(${card.background})` }}
          className="relative w-[230px] min-h-[300px] rounded-[10px] bg-cover bg-center group overflow-hidden"
        >
          {/* Аватар */}
          <div className="flex flex-col items-center gap-1 mt-4">
            <img
              className="w-[90px] h-[90px] rounded-[54px] object-cover"
              src={card.avatar}
              alt={card.avatarAlt}
            />
            <p className="text-[20px] text-white font-bold uppercase tracking-[2px]">
              {card.title}
            </p>
          </div>

          {/* Текст описания */}
          <div
  className="absolute bottom-0 left-0 w-full max-h-0 rounded-t-[20px] backdrop-blur-[56px] bg-gradient-to-b from-[rgba(126,126,126,0.116)] to-[rgba(126,126,126,0.4)] text-center overflow-hidden transition-all duration-400 ease-in-out group-hover:max-h-[300px]"
>
  <p className="text-[16px] text-white font-medium mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
    {card.title}
  </p>
  <p className="text-[10px] text-center text-white group-hover:opacity-100 transition-opacity duration-400">
    {card.description}
  </p>
  {/* Добавление кнопки */}
  <Link href={""}>
    <button className="cursor-pointer mt-3 mb-2 w-[170px] h-[42px] bg-[#777777] text-white text-[12px] font-bold rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
      Перейти
    </button>
  </Link>
</div>


        </div>
      ))}
    </div>
  );
};
