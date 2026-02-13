import { useState } from "react";

interface Props {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: Props) => {
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    setTapped(true);
    setTimeout(onOpen, 1200);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-romantic text-3xl md:text-4xl text-romantic-deep animate-bounce-in">
        You have a special letter! 💌
      </h2>
      <p className="text-muted-foreground font-body">Tap the envelope to open</p>
      <div
        onClick={!tapped ? handleTap : undefined}
        className="cursor-pointer relative"
        style={{ perspective: "600px" }}
      >
        <div
          className="relative transition-all duration-700"
          style={{
            width: "200px",
            height: "140px",
          }}
        >
          {/* Envelope body */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: "hsl(var(--romantic-pink))",
              border: "3px solid hsl(var(--romantic-rose))",
            }}
          />
          {/* Envelope flap */}
          <div
            className="absolute top-0 left-0 right-0 origin-top transition-transform duration-700"
            style={{
              height: "70px",
              background: "linear-gradient(135deg, hsl(var(--romantic-rose)), hsl(var(--romantic-pink)))",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              borderRadius: "8px 8px 0 0",
              transform: tapped ? "rotateX(-180deg)" : "rotateX(0deg)",
            }}
          />
          {/* Heart seal */}
          {!tapped && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-4xl animate-pulse-love">
              ❤️
            </div>
          )}
          {/* Letter peek */}
          {tapped && (
            <div
              className="absolute left-3 right-3 bg-background rounded-t-md flex items-center justify-center transition-all duration-700"
              style={{
                bottom: "10px",
                height: tapped ? "100px" : "0px",
                boxShadow: "0 -4px 12px hsl(var(--romantic-rose) / 0.2)",
              }}
            >
              <span className="font-romantic text-romantic-deep text-sm">
                For you... 💕
              </span>
            </div>
          )}
        </div>
      </div>
      {!tapped && (
        <span className="text-2xl animate-bounce">👆</span>
      )}
    </div>
  );
};

export default Envelope;
