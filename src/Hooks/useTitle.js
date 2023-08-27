import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Medicare`;
  }, [title]);
  return null;
};

export default useTitle;
