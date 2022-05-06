import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../close-button";

interface FeedbackTypesStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypesStepProps) {
  return (
    <>
      <header className="flex items-center justify-center gap-8">
        <h2 className="text-zinc-100 text-xl leading-6">Deixe seu feedback</h2>
        <CloseButton />
      </header>
      <main className="grid grid-cols-3 gap-2 mt-8 mb-12">
        {Object.entries(feedbackTypes).map(([type, { title, icon }]) => (
          <button
            onClick={() => onFeedbackTypeChanged(type as FeedbackType)}
            key={type}
            type="button"
            className="bg-zinc-800 py-5 px-2 rounded-lg flex flex-1 flex-col items-center justify-between border-2 border-transparent hover:border-brand-hover transition-all ease-linear focus:border-brand-hover focus:outline-none"
          >
            <img src={icon.source} alt={icon.alt} />
            <p className="text-zinc-100 text-sm leading-6">{title}</p>
          </button>
        ))}
      </main>
    </>
  );
}
