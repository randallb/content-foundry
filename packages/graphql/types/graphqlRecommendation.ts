import { objectType } from "nexus";

export const graphqlRecommendationsType = objectType({
  name: "Recommendations",
  definition(t) {
    t.list.field("recommendations", {
      type: graphqlRecommendationType,
      description: "A list of recommendations",
    });
  },
});

export const graphqlRecommendationType = objectType({
  name: "RecommendationItem",
  definition(t) {
    t.string("sourceText");
    t.string("recommendedText");
    t.string("explanation");
    t.float("confidence");
  },
});
