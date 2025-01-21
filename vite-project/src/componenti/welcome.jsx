import { Age } from "./age";

export function Welcome({ name, age }) {
  return (
    <>
      <p>Welcome, {name}!</p>
      <Age age={age} />
    </>
  );
}
