'use client'

import { toolsData } from "@/shared/lib/tools-data";
import { Key, useState } from "react";

export const Tools = () => {

  const [tools, setTools] = useState(toolsData);


    return (
        <div className="flex flex-col gap-1">
        <p className="text-[16px] text-[#777777]">Tools</p>
        <div className="w-fit p-2 bg-[#1B1B1B] rounded-4xl">
          <div className="flex flex-wrap items-center gap gap-1.5">
            {tools.map((tool: { id: Key | null | undefined; src: string | undefined; alt: string | undefined }) => (
              <img
                key={tool.id}
                src={tool.src}
                alt={tool.alt}
                className="object-contain w-[32px] h-[32px]"
              />
            ))}
          </div>
        </div>
      </div>
    )
}