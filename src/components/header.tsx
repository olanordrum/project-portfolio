"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import BackflipAnimation from "./BackflipAnimation";

export default function Header() {
  const [projectsHovered, setProjectsHovered] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full mb-2">
      <div
        className="
      absolute inset-x-0 top-0 h-20 md:h-30 lg:h-35
      backdrop-blur-2xl
      [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)]
    "
      >
        <div className="relative z-10">
          <div className=" mx-auto flex items-center justify-between px-4 py-4 md:px-8 lg:px-12  ">
            <Link
              href="/"
              className="font-display font-semibold text-lg md:text-xl lg:text-3xl duration-300 hover:tracking-wide cursor-pointer "
            >
              <Logo />
            </Link>

            <a
              href="/#projects"
              onMouseEnter={() => setProjectsHovered(true)}
              onMouseLeave={() => setProjectsHovered(false)}
            >
              <BackflipAnimation isHovered={projectsHovered} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
