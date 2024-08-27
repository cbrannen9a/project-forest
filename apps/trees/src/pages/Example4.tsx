import { numberOfExamples } from "../constants";

export function Example4() {
  const onClick = (value: number) => {
    console.log(`Item ${value} clicked`);
  };
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
