import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { BfDsForm } from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsFormTextInput } from "packages/bfDs/components/BfDsForm/BfDsFormTextInput.tsx";
import { getLogger } from "packages/logger.ts";
import { BfDsFormSubmitButton } from "packages/bfDs/components/BfDsForm/BfDsFormSubmitButton.tsx";
import { useMutation } from "packages/app/hooks/isographPrototypes/useMutation.tsx";
import ycFormSubmitMutation from "packages/app/__generated__/__isograph/Mutation/SubmitYcForm/entrypoint.ts";


const logger = getLogger(import.meta);

const initialData = {
  companySummary: "AI-first open-source replacement for WordPress",
  productSummary: "Initially, we’ve built a tool which helps people create and edit blog posts to match a consistent voice. Users start by either pasting links to content they find inspirational or manually explaining their voice. They can then paste in a blog post and our system will recommend ways to improve their writing, including voice / tone, but also other storytelling best-practices like active voice, three-act structure, and inverted pyramid.We intend this product to be the first step toward a much broader vision. We’re building an open-source platform designed to help content creators (and companies) tell their story at scale across all mediums and platforms. We’re confident it would replace tools like WordPress.",
  locationDecision:"The company is based in NYC because it’s where we had the highest concentration of people when we started, but we intend to always be a distributed, remote team. ",
  progress:"We launched a prototype on Hacker News today (2/7) and are beginning to build a developer community around the OSS. We currently work with two design partners, AstroForge (W22) and Pattern, paying us 12k and 3k / mo, respectively.",
  workLengthHistory: "We wrote the first lines of code in April 2023. We’ve all been working on it full-time since November 2023.",
  techStack: "Deno + Postgres + React + Graphql + Isograph",
  revenueSource: "Currently revenue comes from design partners, AstroForge and Pattern.",
  previousApplicationChange: "Our original hypothesis was too narrow. From working with customers and building products we learned that knowing *what* to create is a bigger problem than *how* to create it. Getting started and figuring out what kind of content to make is a core issue for businesses—especially startups—pursuing a content marketing strategy. After deciding what content to create, tooling is rarely the problem. And the market for creating better / shorter videos isn’t big enough to support the kind of company we want to build.",
  otherIncubators: "N/A",
  reasonForProductChoice: "We are video producers, creators, and musicians who have worked together for years helping people make better content. At Vidpresso (W14) we became a team; at Facebook we built products at scale; now at Content Foundry, we want to work with our best friends building products to help people do something we’ve devoted our lives to: Telling great stories. We’ve spent the last year and a half talking to different customer segments, building prototypes, and pivoting away from things that weren’t working. We know technical founders at seed and series A startups don’t typically understand mass media, and they know their startup’s growth is dependent on stories spreading organically to other potential customers. They are willing to pay to fix this problem.",
  competitiors: "Our initial product competes with something like Grammarly or Jasper. But unlike pure writing assistants that focus only on generating text, we integrate the entire content lifecycle, from crafting the core company story and creating content, to publication and analytics. In the long term we compete with open-source CMS providers like WordPress, Strapi, Ghost, etc. While WordPress and similar systems are fundamentally CMSs, we’re building an OS for content. In a post-LLM world there are richer experiences that can exist if we start from a blank slate. As an AI-native content operating system, we fill the gap for a platform that generates and manages content in one place.",
  moneyMaking: "We’ll follow the WordPress model of charging for a cloud hosted version of our open-source software. Content creation and management is a multi-billion dollar space when you include marketing, publishing, etc. WordPress powers roughly half of the Internet. We’re starting with targeting technical founders at seed and series A startups to refine the product before expanding to new markets.",
  otherIdeas: "?",
  equityBreakdown: "Randall Bennett, CEO - 16%, Justin Carter, Software Engineer - 16%, Josh LeVitre, Software Engineer - 16%, George LeVitre, Software Engineer - 16%, Dan Sisco, COO - 16%, Equity Pool - 20%",
  investmentsReceived: "",
  reasonForAppling: "",
  whoToldYou: "",
    }
export const YcForm = iso(`
  field BfCurrentViewerLoggedIn.YcForm @component {
    __typename
  }
`)(function YcForm({ data }) {
  const { commit } = useMutation(ycFormSubmitMutation)
  return <BfDsForm initialData={initialData} onSubmit={(form) => {
    commit({
      companySummary: form.companySummary,
      productSummary: form.productSummary,
      locationDecision: form.locationDecision,
      progress: form.progress,
      workLengthHistory: form.workLengthHistory,
      techStack: form.techStack,
      revenueSource: form.revenueSource,
      previousApplicationChange: form.previousApplicationChange,
      otherIncubators: form.otherIncubators,
      reasonForProductChoice: form.reasonForProductChoice,
      competitiors: form.competitiors,
      moneyMaking: form.moneyMaking,
      otherIdeas: form.otherIdeas,
      equityBreakdown: form.equityBreakdown,
      investmentsReceived: form.investmentsReceived,
      reasonForAppling: form.reasonForAppling,
      whoToldYou: form.whoToldYou,
    }, {
      onComplete: (fromMutationData) => {
        logger.info("YcForm submit successful", fromMutationData);
      }
    })
  }}>
    <BfDsFormTextInput title="Company Summary" id="companySummary" />
    <BfDsFormTextInput title="Product Summary" id="productSummary" />
    <BfDsFormTextInput title="Location Decision" id="locationDecision" />
    <BfDsFormTextInput title="Progress" id="progress" />
    <BfDsFormTextInput title="Work Length History" id="workLengthHistory" />
    <BfDsFormTextInput title="Tech Stack" id="techStack" />
    <BfDsFormTextInput title="Revenue Source" id="revenueSource" />
    <BfDsFormTextInput title="Previous Application Change" id="previousApplicationChange" />
    <BfDsFormTextInput title="Other Incubators" id="otherIncubators" />
    <BfDsFormTextInput title="Reason For Product Choice" id="reasonForProductChoice" />
    <BfDsFormTextInput title="Competitors" id="competitiors" />
    <BfDsFormTextInput title="Money Making" id="moneyMaking" />
    <BfDsFormTextInput title="Other Ideas" id="otherIdeas" />
    <BfDsFormTextInput title="Equity Breakdown" id="equityBreakdown" />
    <BfDsFormTextInput title="Investments Received" id="investmentsReceived" />
    <BfDsFormTextInput title="Reason For Applying" id="reasonForAppling" />
    <BfDsFormTextInput title="Who Told You" id="whoToldYou" />
    <BfDsFormSubmitButton text="Submit" />
  </BfDsForm>;
});
