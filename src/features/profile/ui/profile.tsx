'use client';

import { profileData } from "@/shared/lib/profile-data";
import { useState } from "react";

export const Profile = () => {
  const [profile, setProfile] = useState(profileData[0]); // Отображаем первый профиль из массива

  return (
    <>
      <div className="relative -m-4">
        <img
          src={profile.banner}
          alt={profile.avatarAlt}
          className="w-[calc(100%+32px)] h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#131313] to-transparent"></div>
      </div>

      <div className="flex flex-col items-center gap-1 relative bottom-20">
        <img
          className="w-[150px] h-[150px] rounded-[120px] object-cover border-[#1B1B1B] border-1 mb-[48px]"
          src={profile.avatar}
          alt={profile.avatarAlt}
        />
        <p className="text-[32px] text-white glow">{profile.title}</p>
        <p className="text-[22px] text-[#777777]">{profile.description}</p>
      </div>
    </>
  );
};
