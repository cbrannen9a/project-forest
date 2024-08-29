import { numberOfExamples } from "../../constants";

export function ControlA() {
  return (
    <>
      {numberOfExamples.map((example) => (
        <div key={example}>{example}</div>
      ))}
    </>
  );
}
