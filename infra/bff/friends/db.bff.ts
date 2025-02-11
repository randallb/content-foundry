import { register } from "infra/bff/bff.ts";
import {
  __DANGEROUSLY_DESTROY_THE_DATABASE__,
  cleanModelsExcept,
  upsertBfDb,
} from "packages/bfDb/bfDbUtils.ts";

register(
  "db:reset",
  "Resets the db, but only in development mode",
  async () => {
    if (getConfigurationVariable("BF_ENV") === "DEVELOPMENT") {
      await __DANGEROUSLY_DESTROY_THE_DATABASE__(
        "I KNOW THIS IS GOING TO DESTROY EVERYTHING AND I WANT TO DO THAT",
      );
      await upsertBfDb();
      return 0;
    }
    return 1337;
  },
);

register(
  "db:clean",
  "Deletes edges and nodes except for the default ones",
  async () => {
    await cleanModelsExcept();
    return 0;
  },
);
