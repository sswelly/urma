import { CardFriends } from "./type";

export function LoadCardsFromJson(data: any): CardFriends[] {
  return data.map((item: any) => ({
    id: Number(item.id),
    avatar: String(item.avatar),
    avatarAlt: String(item.avatarAlt),
    title: String(item.title),
    description: String(item.description),
    background: String(item.background),
  }));
}
