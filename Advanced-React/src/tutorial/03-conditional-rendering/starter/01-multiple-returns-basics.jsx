import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }
  return <h2>MultipleReturnBasics</h2>;
};
export default MultipleReturnsBasics;
