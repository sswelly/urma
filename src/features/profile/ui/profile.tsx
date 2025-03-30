'use client';

import { profileData } from "@/shared/lib/profile-data";
import { useState } from "react";

export const Profile = () => {
  const [profile, setProfile] = useState(profileData[0]);

  return (
    <>
      <div className="relative -m-4 h-[200px]">
        {profile.banner ? (
          <img
            src={profile.banner}
            alt={profile.avatarAlt}
            className="w-[calc(100%+32px)] h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="h-full rounded-2xl bg-[#131313]"></div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#131313] to-transparent"></div>
      </div>

      <div className="flex flex-col items-center gap-1 relative bottom-20">

        <div className="relative w-[150px] h-[150px] rounded-full mb-[48px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6F6F73] via-[#DFDFE3] p-[1px]">
            <div className="w-full h-full bg-[#131313] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={profile.avatar}
                alt={profile.avatarAlt}
              />
            </div>
          </div>
        </div>

        <p className="text-[32px] text-white glow">{profile.title}</p>
        <p className="text-[22px] text-[#777777]">{profile.description}</p>
      </div>
    </>
  );
};
