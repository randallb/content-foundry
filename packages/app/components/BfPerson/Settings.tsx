import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const PersonSettings = iso(`
  field BfPerson.PersonSettings @component {
    __typename
    name
  }
`)(function PersonSettings({ data }) {
  return (
    <h1>This is a person {data.name}</h1>
  );
});
