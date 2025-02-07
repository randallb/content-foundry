import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsList } from "packages/bfDs/components/BfDsList.tsx";
import { BfDsListItem } from "packages/bfDs/components/BfDsListItem.tsx";

const entrypoint = iso(`entrypoint Mutation.Register`);

export const SaveRegistrationMutation = iso(`
  field Mutation.Register($registrationResponse: JSONString!) @component {
    register(registrationResponse: $registrationResponse) {
      id
    }
  }
`)(function SaveRegistration({ data }) {
  return <h1>You did it!</h1>;
});
