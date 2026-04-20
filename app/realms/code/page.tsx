"use client";

import ToolCard from "@/app/components/ui/ToolCard";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function CodeRealmPage() {
  return (
    <RealmToolPanel
      title="Code Realm"
      description="Engines for generating code, APIs, components, models, systems, and full-stack architecture."
      aura="from-blue-500/20 to-cyan-500/20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <ToolCard
          title="Code Generator"
          description="Generate frontend, backend, utilities, scripts, and full code modules."
          href="/tools/code/code-generator"
          aura="from-blue-500/30 to-cyan-500/30"
        />

        <ToolCard
          title="API Builder"
          description="Create API routes, handlers, endpoints, and service logic."
          href="/tools/code/api-builder"
          aura="from-cyan-500/30 to-teal-500/30"
        />

        <ToolCard
          title="Component Forge"
          description="Generate UI components, layouts, widgets, and reusable elements."
          href="/tools/code/component-forge"
          aura="from-teal-500/30 to-emerald-500/30"
        />

        <ToolCard
          title="Database Model Engine"
          description="Create Prisma models, schemas, relationships, and migrations."
          href="/tools/code/database-model"
          aura="from-emerald-500/30 to-green-500/30"
        />

        <ToolCard
          title="System Architecture Engine"
          description="Generate system diagrams, architecture plans, and service blueprints."
          href="/tools/code/system-architecture"
          aura="from-green-500/30 to-lime-500/30"
        />

        <ToolCard
          title="Debug & Fix Engine"
          description="Analyze, debug, and repair code, errors, and broken logic."
          href="/tools/code/debug-fix"
          aura="from-lime-500/30 to-yellow-500/30"
        />

        <ToolCard
          title="DevOps Pipeline Engine"
          description="Generate CI/CD pipelines, deployment configs, and automation flows."
          href="/tools/code/devops-engine"
          aura="from-yellow-500/30 to-amber-500/30"
        />

      </div>
    </RealmToolPanel>
  );
}
