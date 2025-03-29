import { Card } from "./type";

export function LoadCardsFromJson(data: any): Card[] {
  return data.map((item: any) => ({
    id: Number(item.id),
    avatar: String(item.avatar),
    avatarAlt: String(item.avatarAlt),
    statusIcon: String(item.statusIcon),
    statusText: String(item.statusText),
    title: String(item.title),
    description: String(item.description),
    background: String(item.background),
  }));
}
