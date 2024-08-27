import { useCallback } from "react";
import { numberOfExamples } from "../../constants";

export function Example2D() {
  const onClick = useCallback((value: number) => {
    console.log(`Item ${value} clicked`);
  }, []);

  return (
    <>
      {numberOfExamples.map((example) => (
        <Button key={example} onClick={onClick} value={example} />
      ))}
    </>
  );
}

function Button({
  onClick,
  value,
}: {
  onClick: (value: number) => void;
  value: number;
}) {
  return <button onClick={() => onClick(value)}>{value}</button>;
}
