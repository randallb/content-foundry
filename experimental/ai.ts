import { getAi } from "lib/ai.ts";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";
import { getLogger } from "packages/logger.ts";
const logger = getLogger(import.meta);

const schema = z.object({
  recommendations: z.array(
    z.object({
      sourceText: z.string().describe("The verbatim text to replace"),
      recommendedText: z.string().describe("The recommended text in its place"),
      explanation: z.string().describe(
        "An explanation of why the text was recommended",
      ),
      confidence: z.number().describe(
        "A zero to 1 value indicating how confident the AI is in the recommendation",
      ),
    }),
  ),
});

const openAi = getAi();

export default openAi;

export const systemPrompty = `
Let's write social media content for an asteroid mining startup called AstroForge. Its CEO is named Matt. The overall voice of the company is like the nerdy person in high school who you always knew was going to do cool things. It's professional and authoritative without taking itself too seriously. A little tongue-in-cheek is okay. We want to avoid expository content in favor of "show" content that explicitly shows what the company is up to in this moment. For example this tweet is good: 

To actually get platinum group metals from an asteroid, we can't use traditional mining techniques. Instead we shoot it with lasers and extract the most valuable materials. 

These are our guinea pig meteorite fragments... thanks for your service, little guys [picture of meteorite with burn marks]

This tweet is bad because it's too much exposition:

Were proving that it’s possible for commercial access to deep space to be two orders of magnitude cheaper than @NASA.

The @NASA @MissionToPsyche is estimated to cost $1.2 billion.

The Europa Clipper is estimated to cost $5.1 billion.

Odin, our first deep-space mission, will cost less than $10 million. 

Here's the company's story in a nutshell: 

Matt grew up in a family where pushing the limits was the norm.

Inspired by his dad, a land speed racer, Matt had his own dreams. Matt dreamed, not about race cars, but of exploring the stars.

Matt wanted to push humanity farther and faster than it had ever gone before.

When Matt received an offer from NASA to work on sending a satellite to one of Jupiter’s moons, he was excited to finally explore one of the unknown mysteries of the universe: Life!

Unfortunately, he learned that it would take decades and billions of dollars to accomplish. This made Matt sad. He needed to find a way to explore space now.

Instead of NASA, Matt went to Virgin Orbit, where he got to work on launching a rocket off of a 747. He learned that it was possible to move faster and do more in private industry.

But still, Matt was working on solutions for problems in near space. He wanted to explore deep space.

So, Matt founded AstroForge.

AstroForge exists to answer the fundamental questions of why we’re here. They’re not just launching rockets, they’re trying to fix real problems.

Terrestrial mining is critical for our way of life on Earth. It’s also the most damaging process that humans do on the earth and it endangers millions of lives.

AstroForge has figured out a way to mine precious metals from asteroids in deep space. This will help protect the environment, save lives, and fund its exploration of the cosmos to answer the deep question of why we’re here!

AstroForge reached orbit faster than any company in history. That doesn’t mean they were the most successful, or that everything went as planned. But for Matt it’s all about moving forward and never stopping.

When AstroForge launched its first spacecraft last year, they used off-the-shelf parts. It didn’t go as well as they had hoped.

They realized they had to build the most advanced team in the world and create the next spacecraft all by themselves.

Now some of the best scientists and engineers in the world have joined the company to advance its mission of exploring deep space! The components they built themselves are higher quality and more reliable than anything previously available.

AstroForge even became the first commercial company to get FCC approval to communicate with a craft in deep space!

In February, AstroForge will launch a spacecraft to scout and photograph an asteroid over 100x farther away than the moon.

Next year they’ll launch a third mission to collect asteroid samples and return with them to Earth.

AstroForge isn’t just making plans, they’re already exploring deep space.

Back on earth, a steady supply of precious metals means we have the best chance of protecting our planet from the irreversible damage of terrestrial mining.

Exploring deep space to solve humanity’s most pressing problems, Matt is breaking through limits, finding new ways to sustain the earth, and discovering how humans fit into the broader universe.
`;

const taskPrompty = `
This is a tweet we're workshopping, on a scale of 1-10, please rate how on voice this tweet feels. Please also provide recommendations about problematic areas, but don't rewrite the tweet.
`

export async function runIt(content: string, taskPrompt = taskPrompty, systemPrompt = systemPrompty) {
  const options = {};
  const response = await openAi.chat.completions.create(
    {
      model: "openrouter/auto",
      response_format: zodResponseFormat(schema, "recommendations"),
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "system",
          content: taskPrompt,
        },
        {
          role: "user",
          content,
        },
        {
          role: "system",
          content:
            "Please return results for the recommendations using our schema.",
        },
      ],
    },
    options,
  );

  const choice = response.choices[0];
  if (!choice) throw new Error("No choice");
  let responseObject = {
    recommendations: [],
  };
  try {
    responseObject = JSON.parse(choice.message.content ?? "{}");
    return schema.parse(responseObject);
  } catch (e) {
    logger.error(e);
    return responseObject;
  }
}
