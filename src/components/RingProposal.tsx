import ValentineQuestion from "./ValentineQuestion";

interface Props {
  onYes: () => void;
}

const RingProposal = ({ onYes }: Props) => {
  return (
    <div className="flex flex-col items-center gap-6 animate-bounce-in">
      <h2 className="font-romantic text-3xl md:text-5xl text-romantic-deep text-center">
        Happy Valentine's Day 💝
      </h2>
      <h3 className="font-romantic text-2xl md:text-3xl text-romantic-rose text-center">
        My Dear Adhu Kutta!
      </h3>

      {/* Ring */}
      <div className="text-7xl md:text-8xl animate-ring-glow rounded-full p-6">
        💍
      </div>

      <ValentineQuestion
        onYes={onYes}
        question="Will you always be mine forever? 💕"
      />
    </div>
  );
};

export default RingProposal;
