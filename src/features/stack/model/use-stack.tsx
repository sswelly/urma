import { Stack } from "./type";

export function LoadToolsOnJson(data: any): Stack[] {
  return data.map((item: any) => ({
    id: Number(item.id),
    src: String(item.src),
    alt: String(item.alt),
  }));
}
