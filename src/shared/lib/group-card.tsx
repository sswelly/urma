import { Card } from "@/features/cards/model/type";

/**
 * Функция группировки карточек по заданному размеру групп.
 * @param cards Массив карточек, которые нужно сгруппировать.
 * @param groupSize Размер группы (по умолчанию 2).
 * @returns Массив сгруппированных карточек.
 */
export function groupCards(cards: Card[], groupSize: number = 2): Card[][] {
  const grouped: Card[][] = [];
  for (let i = 0; i < cards.length; i += groupSize) {
    grouped.push(cards.slice(i, i + groupSize));
  }
  return grouped;
}
