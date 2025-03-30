import { Profile } from "@/features/profile/ui/profile"
import { Social } from "@/features/socialButtons/ui/social"
import Link from "next/link"

export const LeftPanel = () => {
    return (
        <div className="w-full p-4 h-auto bg-[#131313] border-[#1B1B1B] border-1 rounded-2xl flex flex-col  md:h-[760px] md:max-w-[330px]">

        <Profile />
  
        {/* Divider */}
        <hr className="border-t border-[#1B1B1B] w-full mb-3" />
  
        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-6 md:flex-nowrap">

          <Social />

        </div>
  
        {/* Donate Button */}
        <div className="mt-auto">
          <Link href={""}>
            <button className="cursor-pointer w-full p-4 bg-[#E08E30] rounded-[12px] flex items-center gap-2.5 justify-center hover-glow-donate">
              <img src="moneybag.svg" alt="" />
              <span className="text-[16px] text-[white] font-bold">Donate</span>
            </button>
          </Link>
        </div>
      </div>
    )
}