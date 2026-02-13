import { useState } from "react";

interface Props {
  onMore: () => void;
}

const BirthdayCake = ({ onMore }: Props) => {
  const [tapped, setTapped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 animate-bounce-in">
      <h2 className="font-romantic text-3xl md:text-5xl text-romantic-deep text-center">
        🎂 Happy Birthday 🎂
      </h2>
      <h3 className="font-romantic text-2xl md:text-3xl text-romantic-rose text-center">
        My Dear Adhu Kutta! 🎉
      </h3>

      {/* Cake */}
      <div
        className="cursor-pointer relative"
        onClick={() => !tapped && setTapped(true)}
      >
        <div className="text-8xl md:text-9xl transition-transform duration-300 hover:scale-110">
          🎂
        </div>
        {!tapped && (
          <>
            <p className="text-muted-foreground font-body text-center mt-2">
              Tap the cake! 🎈
            </p>
            <span className="text-2xl animate-bounce block text-center">👆</span>
          </>
        )}
      </div>

      {tapped && (
        <div className="flex flex-col items-center gap-4 animate-bounce-in">
          <div className="flex gap-2 text-3xl">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>🎈</span>
            <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>🎊</span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>🎁</span>
            <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>🎉</span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>🎈</span>
          </div>
          <p className="font-romantic text-xl text-romantic-deep text-center">
            Wishing you the most magical birthday ever! ✨
          </p>
          <button onClick={onMore} className="btn-romantic">
            Click for More Surprises! 💝
          </button>
        </div>
      )}
    </div>
  );
};

export default BirthdayCake;
