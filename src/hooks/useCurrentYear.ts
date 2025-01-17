import { useMemo } from "react";

export const useCurrentYear = (): number => {
  // If you want to avoid unnecessary recalculations or if your app uses hooks in a complex way,
  // you can create a custom hook that will memoize the current year.
  return useMemo(() => new Date().getFullYear(), []);
};

// export default getCurrentYear;
