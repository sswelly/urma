import { Button } from "./type";

export function LoadButtonsFromJson(data: any): Button[] {
  return data.map((item: any) => ({
    id: Number(item.id),
    href: String(item.href),
    icon: String(item.icon),
    label: String(item.label),
    borderColor: String(item.borderColor),
  }));
}
