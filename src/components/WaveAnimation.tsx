import { useState, useEffect } from "react";

const keyframes = [
  "../../animations/wave/Wave_01.png",
  "../../animations/wave/Wave_02.png",
  "../../animations/wave/Wave_03.png",
  "../../animations/wave/Wave_04.png",
  "../../animations/wave/Wave_05.png",
  "../../animations/wave/Wave_06.png",
  "../../animations/wave/Wave_07.png",
  "../../animations/wave/Wave_08.png",
  "../../animations/wave/Wave_09.png",
  "../../animations/wave/Wave_10.png",
];

export default function WaveAnimation() {
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
      alt="wave animation"
      className="w-32 h-32 object-contain"
    />
  );
}
