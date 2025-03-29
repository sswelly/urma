import { Profile } from "./type";

export function LoadCardsFromJson(data: any): Profile[] {
  return data.map((item: any) => ({
    id: Number(item.id),
    banner: String(item.banner),
    avatar: String(item.avatar),
    avatarAlt: String(item.avatarAlt),
    title: String(item.title),
    description: String(item.description),
  }));
}
