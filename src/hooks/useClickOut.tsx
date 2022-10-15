import { RefObject } from "react";
import { useElementEventListener } from "./useElementEventListener";

type Handler = (event: MouseEvent) => void;

const useClickOut = <T extends HTMLElement = HTMLElement>(
  elementsRef: Array<RefObject<T>> = [],
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown",
) => {
  useElementEventListener(mouseEvent, (event) => {
    if (
      elementsRef.length === 0 ||
      elementsRef.some((r) => r.current?.contains(event.target as Node))
    ) {
      return;
    }

    handler(event);
  });
};

export { useClickOut };
