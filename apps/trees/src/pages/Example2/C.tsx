import { numberOfExamples } from "../../constants";

export function Example2C() {
  return (
    <>
      {numberOfExamples.map((example) => (
        <Button key={example} value={example} />
      ))}
    </>
  );
}

function Button({ value }: { value: number }) {
  const onClick = (value: number) => {
    console.log(`Item ${value} clicked`);
  };
  return <button onClick={() => onClick(value)}>{value}</button>;
}
