// app/fund/page.tsx

import { Card } from "@/components/ui/Card";

export default function FundPage() {
  return (
    <div className="fade-in-up space-y-6">
      <h1 className="text-2xl font-bold">Creator Fund Realm</h1>
      <Card>
        <p className="text-slate-300">
          The Creator Fund Realm manages grants, rewards, incentives, and
          long‑term financial empowerment for creators in the Hegay ecosystem.
        </p>
      </Card>
    </div>
  );
}
