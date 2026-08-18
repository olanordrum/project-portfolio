import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className=" mx-auto flex items-center justify-between px-4 py-4 md:px-8 lg:px-12  ">
        <Link
          href="/"
          className="font-display font-semibold text-lg md:text-xl lg:text-3xl duration-300 hover:tracking-wide cursor-pointer "
        >
          <Logo />
        </Link>
        <Link
          href="/#projects"
          className="text-xl duration-300 hover:tracking-wide "
        >
          Projects
        </Link>
      </div>
    </header>
  );
}
