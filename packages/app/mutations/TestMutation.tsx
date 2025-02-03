import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsList } from "packages/bfDs/components/BfDsList.tsx";
import { BfDsListItem } from "packages/bfDs/components/BfDsListItem.tsx";

const entrypoint = iso(`entrypoint Mutation.QualityCheckTweet`);

export const qualityCheckTweetMutation = iso(`
  field Mutation.QualityCheckTweet($tweet: String!) @component {
    qualityCheckTweet(tweet: $tweet) {
    __typename
      recommendations {
        sourceText
        recommendedText
        explanation
        confidence
      }
    }
  }
`)(function QualityCheckTweet({ data }) {
  const elements = data.qualityCheckTweet?.recommendations?.filter(Boolean).map(
    (recommendationItem) => {
      const { recommendedText, explanation } = recommendationItem ?? {};
      return (
        <BfDsListItem
          key={recommendedText}
          content={`Recommended: ${recommendedText} Explanation: ${explanation}`}
        />
      );
    },
  );
  return (
    <BfDsList>
      {elements}
    </BfDsList>
  );
});
