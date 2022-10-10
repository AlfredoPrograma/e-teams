import { useLocation } from "react-router-dom";

const useQueryParams = <T extends string>() => {
  const { search } = useLocation();
  const paramsObject = new URLSearchParams(search);

  const queryParams: Partial<Record<T, string>> = {};

  paramsObject.forEach((value, key) => {
    queryParams[key as T] = value;
  });

  return queryParams;
};

export { useQueryParams };
