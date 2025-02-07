import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

iso(`entrypoint Mutation.RegistrationOptions`);
export const RegistrationOptions = iso(`
  field Mutation.RegistrationOptions($email: String!) {
    registrationOptions(email: $email)
  }
`)(function RegistrationOptions({ data }) {
  if (data?.registrationOptions == null) {
    return null;
  }
  const registrationOptions = JSON.parse(data.registrationOptions);
  return registrationOptions;
});
