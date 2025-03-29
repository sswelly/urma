import Link from "next/link"

export const Header = () => {
    return (
        <header className="w-full h-20 bg-[#131313] border-[#1B1B1B] border-1 rounded-2xl p-7 mb-5">
        <div className="flex items-center gap-2.5">
          <Link href={"/"}>
            <button className="cursor-pointer hover-glow">Dashboard</button>
          </Link>
          <Link href={""}>
            <button className="cursor-pointer hover-glow">Friends</button>
          </Link>
          <Link href={"/projects"}>
            <button className="cursor-pointer hover-glow">Projects</button>
          </Link>
        </div>
      </header>
    )
}