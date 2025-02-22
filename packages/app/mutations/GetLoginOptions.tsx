import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

iso(`entrypoint Mutation.GetLoginOptions`);
export const GetLoginOptionsMutation = iso(`
  field Mutation.GetLoginOptions($email: String!) {
    getLoginOptions(email: $email)
  }
`)(function GetLoginOptionsMutation({ data }) {
  return data?.getLoginOptions;
});
