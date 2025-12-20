import { navLists } from "@/contants";
import { appleImg, bagImg, searchImg } from "@/utils";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-center items-center">
      <nav className="flex w-full screen-max-width">
        <Image src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav}>{nav}</div>
          ))}
        </div>

        <div>
          <Image src={searchImg} alt="Search" width={18} height={18} />
          <Image src={bagImg} alt="Search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
