import { numberOfExamples } from "../../constants";

export function Example2A() {
  function Button({
    onClick,
    value,
  }: {
    onClick: (value: number) => void;
    value: number;
  }) {
    return <button onClick={() => onClick(value)}>{value}</button>;
  }

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
