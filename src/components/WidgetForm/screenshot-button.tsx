import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { LoadingIcon } from "../../assets/icons";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string) => void;
}

export function ScreenshotButton({ onScreenshotTook }: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base65Image = canvas.toDataURL("image/png");
    setScreenshot(base65Image);
    setIsTakingScreenshot(false);
    onScreenshotTook(base65Image);
  };

  const handleDiscardScreenshot = async () => setScreenshot(null);

  if (screenshot) {
    return (
      <button
        type="button"
        className="group focus:outline-none h-10 w-10 relative bg-zinc-800 rounded-md"
        onClick={handleDiscardScreenshot}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Trash className="absolute right-0 bottom-0 w-4 h-4 text-zinc-400 border-[1px] border-transparent group-focus:border-brand-hover transition-all ease-linear" />
      </button>
    );
  }

  return (
    <button
      onClick={handleTakeScreenshot}
      type="button"
      className="group h-10 w-10 bg-zinc-800 rounded-md flex items-center justify-center border-2 border-transparent focus:border-brand-hover focus:outline-none"
    >
      {isTakingScreenshot ? (
        <img className="w-7 h-7" src={LoadingIcon} alt="icon of the loading" />
      ) : (
        <Camera className="w-6 h-6 text-zinc-400 group-hover:text-white transition-all ease-linear group-focus:text-white" />
      )}
    </button>
  );
}
