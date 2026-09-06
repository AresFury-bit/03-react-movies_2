import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";
interface VoteOptionsProps {
  onVote: (vote: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  const handleOnVote = (vote: VoteType) => {
    onVote(vote);
  };

  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => handleOnVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => handleOnVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => handleOnVote("bad")}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
