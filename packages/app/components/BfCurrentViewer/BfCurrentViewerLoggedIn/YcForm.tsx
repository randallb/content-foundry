import React, { useState } from "react";
import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsForm } from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsFormTextArea } from "packages/bfDs/components/BfDsForm/BfDsFormTextArea.tsx";
import { getLogger } from "packages/logger.ts";
import { BfDsFormSubmitButton } from "packages/bfDs/components/BfDsForm/BfDsFormSubmitButton.tsx";
import { useMutation } from "packages/app/hooks/isographPrototypes/useMutation.tsx";
import ycFormSubmitMutation from "packages/app/__generated__/__isograph/Mutation/SubmitYcForm/entrypoint.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";
import { Revision } from "packages/app/components/ContentOS/Revision.tsx";

const logger = getLogger(import.meta);

type Revisions = Record<string, {
  revision: string;
  explanation: string;
  confidence: number;
}>;

const formFields = [
  { id: "companySummary", title: "Company Summary" },
  { id: "productSummary", title: "Product Summary" },
  { id: "locationDecision", title: "Location Decision" },
  { id: "progress", title: "Progress" },
  { id: "workLengthHistory", title: "Work Length History" },
  { id: "techStack", title: "Tech Stack" },
  { id: "revenueSource", title: "Revenue Source" },
  { id: "previousApplicationChange", title: "Previous Application Change" },
  { id: "otherIncubators", title: "Other Incubators" },
  { id: "reasonForProductChoice", title: "Reason For Product Choice" },
  { id: "competitors", title: "Competitors" },
  { id: "moneyMaking", title: "Money Making" },
  { id: "otherIdeas", title: "Other Ideas" },
  { id: "equityBreakdown", title: "Equity Breakdown" },
  { id: "investmentsReceived", title: "Investments Received" },
  { id: "reasonForApplying", title: "Reason For Applying" },
  { id: "whoToldYou", title: "Who Told You" },
];

const initialData = {
  companySummary: "AI-first open-source replacement for WordPress",
  productSummary:
    "Initially, we’ve built a tool which helps people create and edit blog posts to match a consistent voice. Users start by either pasting links to content they find inspirational or manually explaining their voice. They can then paste in a blog post and our system will recommend ways to improve their writing, including voice / tone, but also other storytelling best-practices like active voice, three-act structure, and inverted pyramid.We intend this product to be the first step toward a much broader vision. We’re building an open-source platform designed to help content creators (and companies) tell their story at scale across all mediums and platforms. We’re confident it would replace tools like WordPress.",
  locationDecision:
    "The company is based in NYC because it’s where we had the highest concentration of people when we started, but we intend to always be a distributed, remote team. ",
  progress:
    "We launched a prototype on Hacker News today (2/7) and are beginning to build a developer community around the OSS. We currently work with two design partners, paying us 12k and 3k / mo, respectively.",
  workLengthHistory:
    "We wrote the first lines of code in April 2023. We’ve all been working on it full-time since November 2023.",
  techStack: "Deno + Postgres + React + Graphql + Isograph",
  revenueSource:
    "Currently revenue comes from our two design partners.",
  previousApplicationChange:
    "Our original hypothesis was too narrow. From working with customers and building products we learned that knowing *what* to create is a bigger problem than *how* to create it. Getting started and figuring out what kind of content to make is a core issue for businesses—especially startups—pursuing a content marketing strategy. After deciding what content to create, tooling is rarely the problem. And the market for creating better / shorter videos isn’t big enough to support the kind of company we want to build.",
  otherIncubators: "N/A",
  reasonForProductChoice:
    "We are video producers, creators, and musicians who have worked together for years helping people make better content. At Vidpresso (W14) we became a team; at Facebook we built products at scale; now at Content Foundry, we want to work with our best friends building products to help people do something we’ve devoted our lives to: Telling great stories. We’ve spent the last year and a half talking to different customer segments, building prototypes, and pivoting away from things that weren’t working. We know technical founders at seed and series A startups don’t typically understand mass media, and they know their startup’s growth is dependent on stories spreading organically to other potential customers. They are willing to pay to fix this problem.",
  competitors:
    "Our initial product competes with something like Grammarly or Jasper. But unlike pure writing assistants that focus only on generating text, we integrate the entire content lifecycle, from crafting the core company story and creating content, to publication and analytics. In the long term we compete with open-source CMS providers like WordPress, Strapi, Ghost, etc. While WordPress and similar systems are fundamentally CMSs, we’re building an OS for content. In a post-LLM world there are richer experiences that can exist if we start from a blank slate. As an AI-native content operating system, we fill the gap for a platform that generates and manages content in one place.",
  moneyMaking:
    "We’ll follow the WordPress model of charging for a cloud hosted version of our open-source software. Content creation and management is a multi-billion dollar space when you include marketing, publishing, etc. WordPress powers roughly half of the Internet. We’re starting with targeting technical founders at seed and series A startups to refine the product before expanding to new markets.",
  otherIdeas: "?",
  equityBreakdown:
    "Randall Bennett, CEO - 16%, Justin Carter, Software Engineer - 16%, Josh LeVitre, Software Engineer - 16%, George LeVitre, Software Engineer - 16%, Dan Sisco, COO - 16%, Equity Pool - 20%",
  investmentsReceived: "", // Don't need this
  reasonForApplying: "Previously Vidpresso was part of the W14 batch",
  whoToldYou: "PG",
};
export const YcForm = iso(`
  field BfCurrentViewerLoggedIn.YcForm @component {
    __typename
  }
`)(function YcForm({ data }) {
  const { commit } = useMutation(ycFormSubmitMutation);
  const [revisions, setRevisions] = useState<Revisions>({});
  const hasRevisions = Object.keys(revisions).length > 0;

  logger.debug("hasRevisions", hasRevisions, revisions);
  return (
    <BfDsForm
      initialData={initialData}
      onSubmit={(form) => {
        commit({
          formData: JSON.stringify(form),
        }, {
          onComplete: (fromMutationData) => {
            logger.debug("YcForm submit successful", fromMutationData);
            setRevisions(fromMutationData.submitYcForm ?? {});
          },
        });
      }}
      xstyle={{ width: "100%", maxWidth: "40rem", margin: "auto" }}
    >
      {formFields.map((field) => {
        return (
          <React.Fragment key={field.id}>
            <BfDsFormTextArea title={field.title} id={field.id} />
            {hasRevisions && (
              <Revision
                id={field.id}
                revision={revisions[field.id]?.revision}
                explanation={revisions[field.id]?.explanation}
                confidence={revisions[field.id]?.confidence}
              />
            )}
          </React.Fragment>
        );
      })}

      <BfDsFormSubmitButton text="Submit" showSpinner={false} />
    </BfDsForm>
  );
});
