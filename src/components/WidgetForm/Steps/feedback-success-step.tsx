import { CheckIcon } from "../../../assets/icons";
import { CloseButton } from "../../close-button";

interface FeedbackSuccessStepProps {
  sendAnotherFeedback: () => void;
}

export function FeedbackSuccessStep({
  sendAnotherFeedback,
}: FeedbackSuccessStepProps) {
  return (
    <div>
      <header>
        <CloseButton />
      </header>
      <main className="flex flex-col items-center mt-5">
        <img
          className="mb-3 w-9"
          src={CheckIcon}
          alt="image de um icone branco em formato de correto com fundo verde"
        />
        <h2 className="font-medium text-xl leading-6 text-zinc-100 mb-6">
          Agradecemos o feedback!
        </h2>
        <button
          type="button"
          onClick={sendAnotherFeedback}
          className="mb-10 bg-zinc-800 flex items-center justify-center py-2 px-6 text-zinc-100 rounded focus:outline-offset-2 focus:outline-brand-hover focus:outline-none"
        >
          Enviar outro feedback
        </button>
      </main>
    </div>
  );
}
