import { CardsFriends } from "@/features/cardsFriends/ui/cardsFriends"
import { LeftPanel } from "@/shared"

export default function FriendsPage () {
    return (
        <>
        <div className="flex flex-col gap-5 md:flex-row">
            <LeftPanel />

            <div className="w-full p-4 h-auto bg-[#131313] border-[#1B1B1B] border-1 rounded-2xl">
                <div>
                    <CardsFriends />
                </div>
            </div>
        </div>
        </>
    )
}