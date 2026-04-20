export default function AcceptableUsePage() {
  return (
    <main className="cosmic-bg min-h-screen text-white px-4 md:px-8 lg:px-12 py-10">
      <div className="max-w-3xl mx-auto space-y-6 page-enter">
        <header className="space-y-2">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/50">
            Legal & Safety
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-[color:var(--hegay-gold)]">
            Hegay / Happy AI Acceptable Use & Model Safety Policy
          </h1>
          <p className="text-sm text-white/70">
            This policy explains how our models may and may not be used. By using Hegay / Happy AI,
            you agree to follow these rules.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Prohibited Uses</h2>
          <p className="text-sm text-white/70">
            Hegay / Happy AI models must not be used to:
          </p>
          <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
            <li>Scam, defraud, impersonate, or mislead individuals or organisations.</li>
            <li>
              Generate illegal, abusive, or exploitative content, including extreme hate or
              exploitation material.
            </li>
            <li>
              Violate privacy laws, including collecting, leaking, or processing personal data
              without proper consent.
            </li>
            <li>Spread harmful misinformation intentionally.</li>
            <li>
              Create or assist with hacking, security bypassing, automated attacks, or other
              cyber‑crime.
            </li>
            <li>
              Generate content that infringes copyright or intellectual property, depending on how
              third‑party material is handled.
            </li>
            <li>
              Produce medical, legal, or financial advice presented as professional or definitive
              guidance.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Responsibility & Enforcement</h2>
          <p className="text-sm text-white/70">
            Users are solely responsible for the prompts they submit and the outputs they generate.
            Hegay / Happy AI reserves the right to suspend, restrict, or terminate access where we
            reasonably believe this policy has been violated.
          </p>
          <p className="text-sm text-white/70">
            We may log activity where necessary to detect abuse and may cooperate with lawful
            investigations in accordance with applicable law, including UK legislation such as the
            Computer Misuse Act and fraud laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Brand & Copyright</h2>
          <p className="text-sm text-white/70">
            All Hegay / Happy AI brand assets, models, and interfaces are original or properly
            licensed. Any attempt to misuse our brand, falsely attribute content, or claim ownership
            of our assets is prohibited.
          </p>
          <p className="text-sm text-white/70">
            We do not permit the use of our models for any harmful, illegal, or abusive purpose. Any
            misuse may result in suspension and, where appropriate, reporting to relevant
            authorities.
          </p>
        </section>

        <section className="space-y-2">
          <p className="text-xs text-white/50">
            This policy may be updated as laws, safety standards, and our technology evolve. Please
            review it regularly if you rely on our platform.
          </p>
        </section>
      </div>
    </main>
  );
}
