import { iso } from "packages/app/__generated__/__isograph/iso.ts";

import { getLogger } from "packages/logger.ts";
const logger = getLogger(import.meta);

iso(`entrypoint Query.AppHome`);
export const AppHome = iso(`
  field Query.AppHome @component {
    QualityCheckTweetForm
  }
`)(function AppHome({ data }) {
  return <data.QualityCheckTweetForm />;
});
