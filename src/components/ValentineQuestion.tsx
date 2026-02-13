import { useState } from "react";

interface Props {
  onYes: () => void;
  question: string;
}

const ValentineQuestion = ({ onYes, question }: Props) => {
  const [noCount, setNoCount] = useState(0);
  const yesScale = 1 + noCount * 0.3;

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-romantic text-3xl md:text-4xl text-romantic-deep text-center">
        {question}
      </h2>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <button
          onClick={onYes}
          className="btn-romantic animate-pulse-love"
          style={{
            transform: `scale(${yesScale})`,
            transition: "transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
        >
          Yes! 💕
        </button>
        <button
          onClick={() => setNoCount((c) => c + 1)}
          className="btn-no"
          style={{
            fontSize: `${Math.max(16 - noCount * 2, 8)}px`,
            opacity: Math.max(1 - noCount * 0.15, 0.3),
          }}
        >
          No 😢
        </button>
      </div>
      {noCount > 0 && (
        <p className="text-muted-foreground text-sm animate-bounce-in font-body">
          {noCount === 1 && "Are you sure? 🥺"}
          {noCount === 2 && "Please reconsider... 💔"}
          {noCount === 3 && "You're breaking my heart! 😭"}
          {noCount >= 4 && "Just click Yes already! 🥹💕"}
        </p>
      )}
    </div>
  );
};

export default ValentineQuestion;
