import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsList } from "packages/bfDs/components/BfDsList.tsx";
import { BfDsListItem } from "packages/bfDs/components/BfDsListItem.tsx";

const entrypoint = iso(`entrypoint Mutation.Login`);

export const LoginMutation = iso(`
  field Mutation.Login() @component {
  # field Mutation.Login($options: JSONString!) @component {
    # login(options: $loginOptions) {
    # __typename
    # }
    __typename
  }
`)(function Login({ data }) {
  return <h1>You ARE SO LOGGED IN</h1>;
});
