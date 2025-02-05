import { iso } from "packages/app/__generated__/__isograph/iso.ts";

export const PageLogin = iso(`
  field Query.PageLogin @component {
    me {
      __typename
    }
  }
`)(function PageLogin({ data }) {

  return (
    <h1>This is the login page {data?.me?.__typename}</h1>
  );
});
