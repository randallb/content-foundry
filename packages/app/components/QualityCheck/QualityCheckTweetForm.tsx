import { iso } from "packages/app/__generated__/__isograph/iso.ts";

import { getLogger } from "packages/logger.ts";
const logger = getLogger(import.meta);

import mutation from "packages/app/__generated__/__isograph/Mutation/QualityCheckTweet/entrypoint.ts";
import { BfDsForm } from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsFormTextInput } from "packages/bfDs/components/BfDsForm/BfDsFormTextInput.tsx";
import { BfDsFormSubmitButton } from "packages/bfDs/components/BfDsForm/BfDsFormSubmitButton.tsx";
import { useMutation } from "packages/app/hooks/isographPrototypes/useMutation.tsx";

export const QualityCheckTweetForm = iso(`
  field Query.QualityCheckTweetForm @component {
    __typename
  }
`)(function QualityCheckTweetForm({ data }) {
  const initialData = {
    tweet: "",
    taskPrompt: "",
    systemPrompt: "",
  };
  const { commit, responseElement } = useMutation(mutation);
  logger.info(responseElement);
  return (responseElement ??
    (
      <BfDsForm
        initialData={initialData}
        onSubmit={({ tweet, taskPrompt, systemPrompt }) => {
          logger.info(tweet, taskPrompt, systemPrompt);
          commit({ tweet, taskPrompt, systemPrompt });
        }}
      >
        <BfDsFormTextInput
          autoFocus={true}
          id="tweet"
          title="What's your tweet?"
        />
        <BfDsFormTextInput
          autoFocus={true}
          id="taskPrompt"
          title="What do you want it to do?"
        />
        <BfDsFormTextInput
          autoFocus={true}
          id="systemPrompt"
          title="What should it already know?"
        />
        <BfDsFormSubmitButton text="Woo woo" />
      </BfDsForm>
    ));
});
