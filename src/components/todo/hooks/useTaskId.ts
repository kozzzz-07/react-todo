import { useCallback, useState } from "react";

export const useTaskId = () => {
  const [id, setId] = useState(0);

  const increment = useCallback(() => {
    setId((id) => id + 1);
  }, []);

  return { id, increment };
};
