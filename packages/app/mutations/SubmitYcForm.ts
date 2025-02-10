import { iso } from "packages/app/__generated__/__isograph/iso.ts";
import { getLogger } from "packages/logger.ts";
const logger = getLogger(import.meta);

iso(`entrypoint Mutation.SubmitYcForm`);
export const SubmitYcFormMutation = iso(`
  field Mutation.SubmitYcForm(
    $companySummary: String,
    $productSummary: String,
    $locationDecision: String,
    $progress: String,
    $workLengthHistory: String,
    $techStack: String,
    $revenueSource: String,
    $previousApplicationChange: String,
    $otherIncubators: String,
    $reasonForProductChoice: String,
    $competitiors: String,
    $moneyMaking: String,
    $otherIdeas: String,
    $equityBreakdown: String,
    $investmentsReceived: String,
    $reasonForAppling: String,
    $whoToldYou: String,
  ) {
    submitYcForm(
      companySummary: $companySummary,
      productSummary: $productSummary,
      locationDecision: $locationDecision,
      progress: $progress,
      workLengthHistory: $workLengthHistory,
      techStack: $techStack,
      revenueSource: $revenueSource,
      previousApplicationChange: $previousApplicationChange,
      otherIncubators: $otherIncubators,
      reasonForProductChoice: $reasonForProductChoice,
      competitiors: $competitiors,
      moneyMaking: $moneyMaking,
      otherIdeas: $otherIdeas,
      equityBreakdown: $equityBreakdown,
      investmentsReceived: $investmentsReceived,
      reasonForAppling: $reasonForAppling,
      whoToldYou: $whoToldYou,
    )
  }
`)(function SubmitYcForm({ data }) {
  logger.info("submitYcFormMutation", data);
  return data;
});
