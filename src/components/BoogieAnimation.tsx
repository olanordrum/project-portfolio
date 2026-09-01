import { useState, useEffect } from "react";

const keyframes = [
  "../../animations/boogie/Boogie_01.png",
  "../../animations/boogie/Boogie_02.png",
  "../../animations/boogie/Boogie_03.png",
  "../../animations/boogie/Boogie_04.png",
  "../../animations/boogie/Boogie_05.png",
  "../../animations/boogie/Boogie_06.png",
  "../../animations/boogie/Boogie_07.png",
  "../../animations/boogie/Boogie_08.png",
  "../../animations/boogie/Boogie_09.png",
  "../../animations/boogie/Boogie_10.png",
  "../../animations/boogie/Boogie_11.png",
  "../../animations/boogie/Boogie_12.png",
];

export default function BoogieAnimation() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((current) => (current + 1) % keyframes.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={keyframes[frame]}
      alt="Loading animation"
      className="h-20 md:h-25 lg:h-32 w-auto object-contain"
    />
  );
}
