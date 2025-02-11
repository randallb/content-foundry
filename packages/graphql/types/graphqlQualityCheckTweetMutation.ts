import { mutationField, stringArg } from "nexus";
import {
  graphqlRecommendationsType,
  graphqlYCRecommendationsType,
} from "packages/graphql/types/graphqlRecommendation.ts";
import { runIt } from "experimental/ai.ts";
import { runIt as runItYC } from "experimental/aiYC.ts";
import { getLogger } from "packages/logger.ts";

const logger = getLogger(import.meta);

export const qualityCheckTweetMutation = mutationField("qualityCheckTweet", {
  args: {
    tweet: stringArg(),
    taskPrompt: stringArg(),
    systemPrompt: stringArg(),
  },
  type: graphqlRecommendationsType,
  resolve: async (parent, { tweet, taskPrompt, systemPrompt }) => {
    if (!tweet) {
      throw new Error("No tweet");
    }

    const recommendationsResponse = await runIt(
      tweet,
      taskPrompt ?? undefined,
      systemPrompt ?? undefined,
    );
    return recommendationsResponse;
  },
});

export const submitYcFormMutation = mutationField("submitYcForm", {
  args: {
    formData: stringArg(),
    taskPrompt: stringArg(),
    systemPrompt: stringArg(),
  },
  type: graphqlYCRecommendationsType,
  resolve: async (_, { formData, taskPrompt, systemPrompt }, ctx) => {
    if (!formData) {
      throw new Error("No formData");
    }
    const recommendationsResponse = await runItYC(
      formData ?? "{}",
      taskPrompt ?? undefined,
      systemPrompt ?? undefined,
    );
    logger.debug("Response", recommendationsResponse)
    return recommendationsResponse;
  },
});
