// prisma/seed.ts
import { prisma } from "../lib/prisma";

async function main() {
  const creator = await prisma.creator.create({
    data: {
      name: "Founding Creator",
      handle: "founder",
      bio: "Origin architect of Hegay AI Studio.",
      country: "UK",
    },
  });

  const world = await prisma.universeWorld.create({
    data: {
      name: "Prime Origin World",
      slug: "prime-origin-world",
      description: "The first mapped world in the Hegay creative universe.",
      era: "Genesis",
      creatorId: creator.id,
    },
  });

  await prisma.pantheonArchetype.create({
    data: {
      name: "Guardian of Memory",
      slug: "guardian-of-memory",
      description: "Protects ancestral stories and emotional continuity.",
      domain: "Memory",
      cultureRoot: "Pan-African",
      resonance: "Deep, grounding, protective.",
      worldId: world.id,
    },
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
