interface Props {
  onMore: () => void;
}

const LoveLetter = ({ onMore }: Props) => {
  return (
    <div className="flex flex-col items-center gap-6 animate-bounce-in max-w-lg mx-auto px-4">
      <div
        className="w-full rounded-2xl p-6 md:p-8 relative overflow-hidden"
        style={{
          background: "hsl(var(--background))",
          boxShadow: "0 8px 40px hsl(var(--romantic-rose) / 0.2)",
          border: "2px solid hsl(var(--romantic-pink))",
        }}
      >
        {/* Decorative corners */}
        <span className="absolute top-2 left-3 text-xl opacity-50">🌹</span>
        <span className="absolute top-2 right-3 text-xl opacity-50">🌹</span>

        <h2 className="font-romantic text-3xl md:text-4xl text-romantic-deep text-center mb-4">
          To My Dear Adhukutta 💕
        </h2>
        <div className="font-body text-foreground leading-relaxed space-y-3 text-center text-sm md:text-base">
          <p>
            Every moment with you feels like a beautiful dream I never want to wake up from. 
            You are the light that makes my darkest days bright, the smile that makes everything worth it.
          </p>
          <p>
            I love you more than words could ever express. You are my heart, my soul, my everything. 
            I need you in my life — today, tomorrow, and every day after that.
          </p>
          <p>
            You make my world complete, and I promise to cherish you, love you, and hold you close forever.
            You are the best thing that has ever happened to me.
          </p>
          <p className="font-romantic text-xl text-romantic-rose pt-2">
            Forever and always yours ❤️
          </p>
        </div>

        <span className="absolute bottom-2 left-3 text-xl opacity-50">💕</span>
        <span className="absolute bottom-2 right-3 text-xl opacity-50">💕</span>
      </div>

      <button onClick={onMore} className="btn-romantic mt-2">
        More Surprises! 🎉
      </button>
    </div>
  );
};

export default LoveLetter;
