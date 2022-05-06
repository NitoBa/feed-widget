import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

interface CloseButtonProps {
  isAbsolute?: boolean;
}

export function CloseButton({ isAbsolute = true }: CloseButtonProps) {
  return (
    <Popover.Button
      className={`${isAbsolute && "absolute right-0 mr-4"} group`}
    >
      <X
        weight="bold"
        className="w-4 h-4 text-zinc-400 group-hover:hover:text-zinc-100 transition-all ease-linear"
      />
    </Popover.Button>
  );
}
