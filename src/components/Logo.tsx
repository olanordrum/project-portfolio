/*
const letters = [
  "O",
  "L",
  "A",
  "N",
  "O_1",
  "R",
  "D",
  "R_1",
  "U",
  "M",
  "I",
  "S",
  "A_1",
  "C",
  "H",
  "S_1",
  "E",
  "N_1",
];

export default function Logo() {
  return (
    <div className="flex items-center">
      {letters.map((letter, index) => (
        <img
          key={index}
          src={`../../animations/name/${letter}.png`}
          alt=""
          className="h-3 w-auto md:h-8 lg:h-8"
        />
      ))}
    </div>
  );
}

*/

"use client";

import { useState, useEffect } from "react";

const logos = [
  "../../animations/name/Name_1.png",
  "../../animations/name/Name_2.png",
  "../../animations/name/Name_3.png",
];

export default function Logo() {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((current) => (current + 1) % logos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={logos[currentLogo]}
      alt="Ola Nordrum Isachsen"
      className="h-6 w-auto md:h-10 lg:h-12"
    />
  );
}
