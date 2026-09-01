import { useState, useEffect } from "react";

const keyframes = [
  "../../animations/backflip/P_1.png",
  "../../animations/backflip/P_2.png",
  "../../animations/backflip/P_3.png",
  "../../animations/backflip/P_4.png",
  "../../animations/backflip/P_5.png",
  "../../animations/backflip/P_6.png",
  "../../animations/backflip/P_7.png",
  "../../animations/backflip/P_8.png",
  "../../animations/backflip/P_9.png",
  "../../animations/backflip/P_10.png",
  "../../animations/backflip/P_11.png",
  "../../animations/backflip/P_12.png",
  "../../animations/backflip/P_13.png",
  "../../animations/backflip/P_14.png",
  "../../animations/backflip/P_15.png",
  "../../animations/backflip/P_16.png",
  "../../animations/backflip/P_17.png",
  "../../animations/backflip/P_18.png",
  "../../animations/backflip/P_19.png",
  "../../animations/backflip/P_20.png",
  "../../animations/backflip/P_21.png",
  "../../animations/backflip/P_22.png",
  "../../animations/backflip/P_23.png",
  "../../animations/backflip/P_24.png",
  "../../animations/backflip/P_25.png",
  "../../animations/backflip/P_26.png",
  "../../animations/backflip/P_27.png",
  "../../animations/backflip/P_28.png",
  "../../animations/backflip/P_29.png",
  "../../animations/backflip/P_30.png",
  "../../animations/backflip/P_31.png",
  "../../animations/backflip/P_32.png",
  "../../animations/backflip/P_33.png",
  "../../animations/backflip/P_34.png",
  "../../animations/backflip/P_35.png",
  "../../animations/backflip/P_36.png",
  "../../animations/backflip/P_37.png",
  "../../animations/backflip/P_38.png",
  "../../animations/backflip/P_39.png",
  "../../animations/backflip/P_40.png",
  "../../animations/backflip/P_41.png",
  "../../animations/backflip/P_41.png",
  "../../animations/backflip/P_43.png",
  "../../animations/backflip/P_44.png",
  "../../animations/backflip/P_45.png",
  "../../animations/backflip/P_46.png",
];

export default function BackflipAnimation({
  isHovered,
}: {
  isHovered: boolean;
}) {
  const [frame, setFrame] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setFrame(0);
      return;
    }

    const interval = setInterval(() => {
      setFrame((current) => (current + 1) % keyframes.length);
    }, 100);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="flex flex-row items-end">
      <img
        src={keyframes[frame]}
        alt="backflip animation"
        className="h-6 md:h-9 lg:h-10 w-auto object-contain"
      />
      <img
        src={"../../animations/backflip/rojects.png"}
        alt="Projects"
        className="h-5 md:h-7 lg:h-8 w-auto object-contain"
      />
    </div>
  );
}
