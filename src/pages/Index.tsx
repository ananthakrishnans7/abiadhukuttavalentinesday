import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineQuestion from "@/components/ValentineQuestion";
import Envelope from "@/components/Envelope";
import LoveLetter from "@/components/LoveLetter";
import BirthdayCake from "@/components/BirthdayCake";
import RingProposal from "@/components/RingProposal";
import FinalCelebration from "@/components/FinalCelebration";

type Screen = "landing" | "envelope" | "letter" | "cake" | "ring" | "final";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");

  return (
    <div className="min-h-screen bg-romantic-gradient flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 w-full max-w-2xl mx-auto p-6 flex flex-col items-center justify-center min-h-screen">
        {screen === "landing" && (
          <div className="flex flex-col items-center gap-8 animate-bounce-in">
            <div className="text-5xl animate-pulse-love">💕</div>
            <h1 className="font-romantic text-4xl md:text-6xl text-romantic-deep text-center leading-tight">
              Happy Birthday
              <br />
              My Dear Valentine
              <br />
              <span className="text-romantic-rose">Adhu Kutta!</span>
            </h1>
            <div className="text-3xl flex gap-2">
              <span>🎂</span>
              <span>💝</span>
              <span>🎉</span>
            </div>
            <ValentineQuestion
              onYes={() => setScreen("envelope")}
              question="Will you be my Valentine? 💌"
            />
          </div>
        )}

        {screen === "envelope" && (
          <Envelope onOpen={() => setScreen("letter")} />
        )}

        {screen === "letter" && (
          <LoveLetter onMore={() => setScreen("cake")} />
        )}

        {screen === "cake" && (
          <BirthdayCake onMore={() => setScreen("ring")} />
        )}

        {screen === "ring" && (
          <RingProposal onYes={() => setScreen("final")} />
        )}

        {screen === "final" && <FinalCelebration />}
      </div>
    </div>
  );
};

export default Index;
