import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[f4f5ee] border-t border-white border-t-3 mt-auto py-4 text-sm text-center text-gray-500">
      <div className="flex items-center justify-center gap-15">
        <img
          src={"../../old_dude.png"}
          alt="backflip animation"
          className="h-6 md:h-9 lg:h-30 w-auto object-contain"
        />
        <nav className="flex flex-col justify-center items-start gap-2 tracking-wider">
          <p className="text-black font-bold">NAVIGATION</p>
          <Link className="hover:text-[#3E64CE] tracking-wide" href="/admin">
            Admin
          </Link>
        </nav>
        <nav className="flex flex-col justify-center items-start gap-2 tracking-wider">
          <p className="text-black font-bold">SOCIAL</p>
          <Link className="hover:text-[#3E64CE] tracking-wide" href="/admin">
            Admin
          </Link>
        </nav>
      </div>
    </footer>
  );
}
