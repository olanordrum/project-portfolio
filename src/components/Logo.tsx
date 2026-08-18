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
