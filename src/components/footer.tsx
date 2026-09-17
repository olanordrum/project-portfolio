import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" mt-auto py-10 text-sm text-center ">
      <div className="flex items-center justify-center gap-15">
        <div className="flex items-start gap-7 lg:gap-10">
          <nav className="flex flex-col justify-center items-start gap-2">
            <p className="tracking-widest font-bold">NAVIGATION</p>
            <Link
              className="hover:tracking-widest transition-all duration-300"
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className="hover:tracking-widest transition-all duration-300"
              href="/admin"
            >
              Admin
            </Link>
          </nav>
          <nav className="flex flex-col justify-center items-start gap-2">
            <p className="tracking-widest not-last:font-bold">CONTACT</p>
            <Link
              className="hover:tracking-widest transition-all duration-300"
              href="https://www.linkedin.com/in/olanordrum"
            >
              linkedin
            </Link>
            <Link
              className="hover:tracking-widest transition-all duration-300"
              href="https://github.com/olanordrum"
            >
              Github
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
