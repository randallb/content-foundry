import { getLogger } from "packages/logger.ts";
import { useRouter } from "packages/app/contexts/RouterContext.tsx";
import { iso } from "packages/app/__generated__/__isograph/iso.ts";

const logger = getLogger(import.meta);

iso(`entrypoint Mutation.Register`);
export const RegisterMutation = iso(`
  field Mutation.Register($attResp: JSONString!, $email: String!) @component {
    register(attResp: $attResp, email: $email) {
      __typename
    }
  }
`)(function RegisterMutation({ data }) {
  const { navigate } = useRouter();
  if (data?.register?.__typename) {
    // navigate(data.register.nextPage)

    logger.debug("Logged in!");
  }
  return null;
});
