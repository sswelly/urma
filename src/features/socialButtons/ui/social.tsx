'use client';

import Link from "next/link";
import { socialButtonsData } from "@/shared/lib/socialButtons-data";
import { LoadButtonsFromJson } from "../model/use-socialButtons";

export const Social = () => {
  const buttons = LoadButtonsFromJson(socialButtonsData);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mb-6 md:flex-row">
      {buttons.map((button) => (
        <Link href={button.href} key={button.id}>
          <button
            className="cursor-pointer p-2 border-1 rounded-3xl flex items-center gap-1"
            style={{ borderColor: button.borderColor }}
          >
            <img src={button.icon} alt={button.label} />
            <span className="text-[12px] font-medium">{button.label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};
