// app/ambassadors/page.tsx

import { Card } from "@/components/ui/Card";

export default function AmbassadorsPage() {
  return (
    <div className="fade-in-up space-y-6">
      <h1 className="text-2xl font-bold">Ambassadors Realm</h1>
      <Card>
        <p className="text-slate-300">
          The Ambassadors Realm manages global representatives, cultural bridges,
          and the expansion of the Hegay OS across diaspora communities.
        </p>
      </Card>
    </div>
  );
}
