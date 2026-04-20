"use client";

import StudioHero from "@/components/StudioHero";

export default function DashboardPage() {
  return (
    <div className="w-full p-8 space-y-12">
      {/* Hero Section */}
      <StudioHero />

      {/* Quick Actions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            title="Engines"
            description="Access image, video, audio, writing, and worldbuilding engines."
            href="/studio/engines"
          />

          <ActionCard
            title="Command Center"
            description="Control workflows, agents, and system intelligence."
            href="/studio/command-center"
          />

          <ActionCard
            title="Worker Agent"
            description="Monitor and inspect workflow jobs in real time."
            href="/studio/worker-agent"
          />
        </div>
      </section>

      {/* System Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">System Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OverviewCard
            title="Engines"
            items={[
              "Image Engine",
              "Video Engine",
              "Audio Lab",
              "Writing Engine",
              "Worldbuilder",
            ]}
          />

          <OverviewCard
            title="Realms"
            items={[
              "Origin Realm",
              "Pantheon Realm",
              "Civilizations",
              "Dream Realm",
              "Culture Realm",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

/* ------------------------------
   ACTION CARD
------------------------------ */
function ActionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block p-6 rounded-xl border border-gray-800 bg-black/20 hover:bg-black/30 transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </a>
  );
}

/* ------------------------------
   OVERVIEW CARD
------------------------------ */
function OverviewCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 rounded-xl border border-gray-800 bg-black/20">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <ul className="space-y-2 text-gray-400 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
