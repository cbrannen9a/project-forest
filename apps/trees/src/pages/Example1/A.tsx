import { numberOfExamples } from "../../constants";

export function Example1A() {
  function Profile() {
    return (
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    );
  }
  return (
    <>
      {numberOfExamples.map((example) => (
        <Profile key={example} />
      ))}
    </>
  );
}
