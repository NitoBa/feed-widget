import { ArrowLeft } from "phosphor-react";

interface GoBackButtonProps {
  onClick: () => void;
}

export function GoBackButton({ onClick }: GoBackButtonProps) {
  return (
    <button className="group" onClick={onClick}>
      <ArrowLeft
        weight="bold"
        className="w-4 h-4 text-zinc-400 group-hover:hover:text-zinc-100 transition-all ease-linear"
      />
    </button>
  );
}
