export const Definition = ({
  word,
  pronunciation,
  partOfSpeech,
  definition,
  className = "",
}: {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <span>
        <h4 className="inline-block text-lg">{word}</h4>
        &nbsp;({pronunciation}) <em>{partOfSpeech}</em>
      </span>
      <p>{definition}</p>
    </div>
  );
};
