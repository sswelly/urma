import { Profile } from "@/features/profile/ui/profile"
import Link from "next/link"
import { About } from "./about"
import { Stack } from "@/features/stack/ui/stack-list"
import { Tools } from "@/features/tools/ui/tools-list"
import { Cards } from "@/features/cards/ui/cards"

export const RightPanel = () => {
    return (
         <div className="w-full h-[auto] p-4 pt-14 bg-[#131313] border-[#1B1B1B] border-1 rounded-2xl md:h-[760px]">
         <div className="flex items-center gap-2.5 mb-10">
           <Link href={""}>
             <button className="cursor-pointer glow text-[16px] text-white">About me</button>
           </Link>
         </div>

         <hr className="border-t border-[#1B1B1B] w-full mb-3" />

         <div className="flex flex-col gap-6">
           <About />

           <Stack />

           <Tools/>
         </div>         
       </div>
    )
}