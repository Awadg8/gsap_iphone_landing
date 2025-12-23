import { navLists } from "@/contants";
import { appleImg, bagImg, searchImg } from "@/utils";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-center items-center">
      <nav className="flex w-full screen-max-width">
        <Image src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex w-full justify-center items-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5! text-sm text-[#86868b] hover:text-white cursor-pointer transition-all">{nav}</div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image src={searchImg} alt="Search" width={18} height={18} />
          <Image src={bagImg} alt="Search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
