import { useState } from "react";
import { LoadingIcon } from "../../../assets/icons";
import { CloseButton } from "../../close-button";
import { GoBackButton } from "../../go-back-button";
import { FeedbackType, feedbackTypes } from "..";
import { ScreenshotButton } from "../screenshot-button";
import { api } from "../../../lib/api";

interface FeedbackFormContentProps {
  onSubmit: () => void;
  onGoBack: () => void;
  feedbackType: FeedbackType;
}

export function FeedbackContentStep({
  feedbackType,
  onSubmit,
  onGoBack,
}: FeedbackFormContentProps) {
  const [feedbackDescription, setFeedbackDescription] = useState("");
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [isDisableButton, setIsDisableButton] = useState(true);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const feedbackTypeSelected = feedbackTypes[feedbackType];

  const handleFeedbackDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.value) {
      setIsDisableButton(false);
    } else {
      setIsDisableButton(true);
    }
    setFeedbackDescription(event.target.value);
  };

  const handleSubmitFeedback = async () => {
    if (isSubmittingFeedback) return;
    setIsSubmittingFeedback(true);

    await api.post("/feedback", {
      type: feedbackType,
      comment: feedbackDescription,
      screenshot,
    });

    setIsSubmittingFeedback(false);

    onSubmit();
  };

  return (
    <div className="mb-4">
      <header className="flex items-center gap-20">
        <GoBackButton onClick={onGoBack} />
        <div className="flex items-center gap-2">
          <img
            className="w-6"
            src={feedbackTypeSelected.icon.source}
            alt={feedbackTypeSelected.icon.alt}
          />
          <h2 className="text-zinc-100 font-medium text-xl leading-6">
            {feedbackTypeSelected.title}
          </h2>
        </div>
        <CloseButton isAbsolute={false} />
      </header>
      <form action="submit" className="flex flex-col mt-4">
        <textarea
          rows={5}
          placeholder="Conte com detalhes do que esta acontecendo..."
          className="border-zinc-600 border-[1px] rounded text-sm text-zinc-400 px-3 py-2 outline-none bg-transparent resize-none leading-5 mb-2 focus:border-brand-hover focus:outline-none transition-all ease-linear"
          name="feedback description"
          id="feedback-description"
          onChange={handleFeedbackDescriptionChange}
        ></textarea>
        <div className="flex gap-2">
          <ScreenshotButton onScreenshotTook={setScreenshot} />
          <button
            disabled={isDisableButton}
            onClick={handleSubmitFeedback}
            type="button"
            className="disabled:cursor-not-allowed rounded-md h-10 flex-1 flex items-center justify-center disabled:bg-brand-500/50 bg-brand-500 hover:bg-brand-hover transition-all ease-linear focus:outline-offset-2 focus:outline-brand-hover focus:outline-none"
          >
            {isSubmittingFeedback ? (
              <img
                className="w-7 h-7"
                src={LoadingIcon}
                alt="icon of the loading"
              />
            ) : (
              <span className="font-medium text-sm leading-6 text-white">
                Enviar feedback
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
