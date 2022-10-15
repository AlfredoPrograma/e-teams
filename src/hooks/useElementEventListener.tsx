import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

const useElementEventListener = <
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(
  eventName: K,
  handler: (event: any) => void,
  element?: RefObject<T>,
): void => {
  const savedHandler = useRef(handler);

  useLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    console.log("called");
    const targetElement: T | Window = element?.current ?? window;

    const eventListener: typeof handler = (event) =>
      savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      console.log("unmount");

      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
};

export { useElementEventListener };
