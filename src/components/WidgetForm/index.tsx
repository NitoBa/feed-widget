import { useState } from "react";
import { IdeaIcon, OtherIcon, ProblemIcon } from "../../assets/icons";
import { Footer } from "./footer";
import { FeedbackContentStep } from "./Steps/feedback-content-step";
import { FeedbackSuccessStep } from "./Steps/feedback-success-step";
import { FeedbackTypeStep } from "./Steps/feedback-type-step";

export type FeedbackType = keyof typeof feedbackTypes;

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    icon: {
      source: ProblemIcon,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    icon: {
      source: IdeaIcon,
      alt: "Imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    icon: {
      source: OtherIcon,
      alt: "Imagem de uma nuvem",
    },
  },
};

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

  const resetFeedbackType = () => setFeedbackType(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : !isFeedbackSubmitted ? (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onGoBack={resetFeedbackType}
          onSubmit={() => setIsFeedbackSubmitted(true)}
        />
      ) : (
        <FeedbackSuccessStep sendAnotherFeedback={resetFeedbackType} />
      )}
      <Footer />
    </div>
  );
}
