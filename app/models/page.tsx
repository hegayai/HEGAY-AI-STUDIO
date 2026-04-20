"use client";

export default function ModelsPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Models</h1>

      <p className="text-gray-400">
        Manage, train, and explore your AI models here. This section will
        include model training, uploads, fine‑tuning, and dataset tools.
      </p>

      <div className="rounded-lg border border-gray-800 p-6 bg-black/20">
        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
        <p className="text-gray-500">
          Model training, embeddings, dataset management, and custom pipelines
          will appear here once the Studio OS restoration is complete.
        </p>
      </div>
    </div>
  );
}
