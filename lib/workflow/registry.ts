import { WorkflowDefinition } from "./types";

export const WORKFLOW_REGISTRY: Record<string, WorkflowDefinition> = {
  "demo.simpleModel": {
    name: "demo.simpleModel",
    description: "Single model call using OpenAI.",
    steps: [
      {
        type: "model",
        name: "intro",
        provider: "openai",
        model: "gpt-4o-mini",
        prompt: "Introduce Hegay AI Studio in 3 sentences.",
      },
    ],
  },

  "demo.cinematicIntro": {
    name: "demo.cinematicIntro",
    description: "Cinematic intro + delay + log.",
    steps: [
      {
        type: "model",
        name: "cinematic_intro",
        provider: "openai",
        model: "gpt-4o-mini",
        prompt:
          "Write a cinematic, mythic introduction for Hegay AI Studio as a creative civilization.",
      },
      {
        type: "delay",
        ms: 500,
      },
      {
        type: "log",
        message: "Cinematic intro generated.",
      },
    ],
  },
};
