import { numberOfExamples } from "../constants";

export function Example2() {
  return (
    <>
      {numberOfExamples.map((example) => (
        <Profile key={example} />
      ))}
    </>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}