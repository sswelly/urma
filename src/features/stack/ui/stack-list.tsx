'use client'

import { stackData } from "@/shared/lib/stack-data";
import { Key, useState } from "react";

export const Stack = () => {

    const [stack, setStack] = useState(stackData);

    return(
        <div className="flex flex-col gap-1">
            <p className="text-[16px] text-[#777777]">Stack</p>
            <div className="w-fit p-2 bg-[#1B1B1B] rounded-4xl">
            <div className="flex flex-wrap items-center gap gap-1.5">
            {stack.map((tool: { id: Key | null | undefined; src: string | undefined; alt: string | undefined }) => (
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


