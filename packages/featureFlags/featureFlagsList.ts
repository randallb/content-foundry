/**
 * This file is used to define the features and their variants.
 *
 * The `featureFlags` object is used to define the features that are
 * either on or off. The `featureVariants` object is used to define
 * the features that have multiple variants.
 *
 * Important: This is a file used both on clients and servers. Do not
 * import anything that is not available on both.
 *
 * To use feature flags, define the "key" in either object, and then
 * add the respective related item in posthog.
 */
export type FeatureFlagsEnabled = typeof featureFlagsEnabled;
export type FeatureFlagsVariant = typeof featureFlagsVariant;
export type FeatureFlagVariant<T extends keyof FeatureFlagsVariant> =
  FeatureFlagsVariant[T];
export type FeatureFlagEnabled<T extends keyof FeatureFlagsEnabled> =
  FeatureFlagsEnabled[T];

/**
 * For ease of pasting into posthog, make it be "real json" including
 * quoted string keys.
 *
 * Also, please keep them alphabetized.
 */
const featureFlagsVariantUnfrozen = {};
export const featureFlagsVariant = Object.freeze(featureFlagsVariantUnfrozen);

/**
 * Gating flags are how we separate subscriptions. These should
 * be set to false, and relate to each tier. Server side, we enable
 * and disable gating, using posthog properties right now.
 */
const gatingFlags = {
  gating_starter: false,
  gating_basic: false,
  gating_pro: false,
};

// Keep alphabetized please!
const featureFlagsEnabledUnfrozen = {
  enable_demo_button: false,
  ...gatingFlags, // should always be last so they don't accidentally get overwritten
};

export const featureFlagsEnabled = Object.freeze(featureFlagsEnabledUnfrozen);
