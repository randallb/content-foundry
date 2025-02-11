import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { VoiceSetup } from "packages/app/components/ContentOS/VoiceSetup.tsx";
import { Onboarding } from "packages/app/components/ContentOS/Onboarding.tsx";
import { useState } from "react";
import { Editor } from "packages/app/components/ContentOS/Editor.tsx";

export const ContentOS = iso(`
  field Query.ContentOS @component {
    __typename
  }
`)(function ContentOS({ data }) {
  const [hasPasskey, setHasPasskey] = useState(true);
  const [hasVoice, setHasVoice] = useState(true);
  if (hasVoice) {
    return <Editor />;
  }
  return (
    <>
      {hasPasskey ? <VoiceSetup /> : <Onboarding />}
    </>
  );
});
