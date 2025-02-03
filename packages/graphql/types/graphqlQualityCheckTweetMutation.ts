import { mutationField, stringArg } from "nexus";
import { graphqlRecommendationsType } from "packages/graphql/types/graphqlRecommendation.ts";
import { runIt } from "experimental/ai.ts";

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
