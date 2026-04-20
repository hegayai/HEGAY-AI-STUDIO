// app/creators/page.tsx

import { Card } from "@/components/ui/Card";

export default function CreatorsPage() {
  return (
    <div className="fade-in-up space-y-6">
      <h1 className="text-2xl font-bold">Creators Realm</h1>
      <Card>
        <p className="text-slate-300">
          The Creators Realm manages profiles, creative identities, skill trees,
          and the evolution of global diaspora creators within the OS.
        </p>
      </Card>
    </div>
  );
}
