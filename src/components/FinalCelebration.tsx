import { useEffect } from "react";
import confetti from "canvas-confetti";

const FinalCelebration = () => {
  useEffect(() => {
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#e11d73", "#f472b6", "#fbbf24", "#fb7185"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#e11d73", "#f472b6", "#fbbf24", "#fb7185"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 animate-bounce-in text-center px-4">
      <div className="text-5xl md:text-6xl flex gap-2">
        <span className="animate-bounce" style={{ animationDelay: "0s" }}>🎉</span>
        <span className="animate-bounce" style={{ animationDelay: "0.15s" }}>❤️</span>
        <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>🎊</span>
      </div>

      <h1 className="font-romantic text-4xl md:text-6xl text-romantic-deep leading-tight">
        Happy Birthday
      </h1>
      <h2 className="font-romantic text-3xl md:text-4xl text-romantic-rose">
        &
      </h2>
      <h1 className="font-romantic text-4xl md:text-6xl text-romantic-deep leading-tight">
        Happy Valentine's Day
      </h1>
      <h2 className="font-romantic text-2xl md:text-3xl text-romantic-rose mt-2">
        My Dear Adhukutta! 💕
      </h2>

      <div className="text-4xl flex gap-3 mt-4">
        {["❤️", "🌹", "💕", "✨", "💖", "🌹", "❤️"].map((e, i) => (
          <span
            key={i}
            className="animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {e}
          </span>
        ))}
      </div>

      <p className="font-romantic text-xl md:text-2xl text-romantic-deep mt-4 max-w-md">
        You mean the world to me. I love you to the moon and back, forever and always! 💝
      </p>

      <div className="text-6xl animate-pulse-love mt-4">
        ❤️
      </div>
    </div>
  );
};

export default FinalCelebration;
