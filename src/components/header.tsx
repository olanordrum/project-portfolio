"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import BackflipAnimation from "./BackflipAnimation";

export default function Header() {
  const [projectsHovered, setProjectsHovered] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className=" backdrop-blur-2xl">
        <div className=" mx-auto flex items-center justify-between px-4 py-4 md:px-8 lg:px-12  ">
          <Link
            href="/"
            className="font-display font-semibold text-lg md:text-xl lg:text-3xl duration-300 hover:tracking-wide cursor-pointer "
          >
            <Logo />
          </Link>
          <a
            href="#projects"
            onMouseEnter={() => setProjectsHovered(true)}
            onMouseLeave={() => setProjectsHovered(false)}
          >
            <BackflipAnimation isHovered={projectsHovered} />
          </a>
        </div>
      </div>
      <div
        className="
  pointer-events-none
  absolute left-0 right-0 top-full
  h-15
  backdrop-blur-md
  [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]
  "
      />
    </header>
  );
}
