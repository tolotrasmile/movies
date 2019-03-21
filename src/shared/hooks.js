import { useState, useEffect } from "react";
import queryString from "query-string";

export const useDebounce = (initialValue, delay) => {
  const [value, setValue] = useState(initialValue);

  useEffect(
    () => {
      const handler = setTimeout(() => setValue(initialValue), delay);
      return () => clearTimeout(handler);
    },
    [initialValue, delay]
  );

  return value;
};

export const useDebounceState = (initialValue, delay) => {
  const [value, setValue] = useState(initialValue);
  const debounceValue = useDebounce(value, delay);
  return [value, setValue, debounceValue];
};

export const useQuery = function() {
  const { query: initialQuery = "" } = queryString.parse(
    window.location.search
  );
  const [query, setQuery] = useState(initialQuery);
  useEffect(
    () => {
      const { query: lastQuery = "" } = queryString.parse(
        window.location.search
      );
      setQuery(lastQuery);
    },
    [query]
  );
  return query;
};
