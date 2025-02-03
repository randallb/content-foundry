import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const AdminApp = iso(`
  field Query.AdminApp @component {
    __typename
  }
`)(function AdminApp({ data }) {

  return (
    <h1>This is an admin app {data.__typename}</h1>
  );
});
