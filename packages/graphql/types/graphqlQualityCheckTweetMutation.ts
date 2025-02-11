import { mutationField, stringArg } from "nexus";
import { graphqlRecommendationsType } from "packages/graphql/types/graphqlRecommendation.ts";
import { runIt } from "experimental/ai.ts";
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
    companySummary: stringArg(),
    productSummary: stringArg(),
    locationDecision: stringArg(),
    progress: stringArg(),
    workLengthHistory: stringArg(),
    techStack: stringArg(),
    revenueSource: stringArg(),
    previousApplicationChange: stringArg(),
    otherIncubators: stringArg(),
    reasonForProductChoice: stringArg(),
    competitiors: stringArg(),
    moneyMaking: stringArg(),
    otherIdeas: stringArg(),
    equityBreakdown: stringArg(),
    investmentsReceived: stringArg(),
    reasonForAppling: stringArg(),
    whoToldYou: stringArg(),
  },
  type: "String",
  resolve: async (_, args, ctx) => {
    logger.info("submitYcFormMutation", args);
    return "submat";
  }
})