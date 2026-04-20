"use client";

import { useState, useEffect } from "react";

export default function Economy() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [amount, setAmount] = useState("");
  const [payoutAmount, setPayoutAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const loadBalance = async () => {
    try {
      const res = await fetch("/api/economy/balance");
      const data = await res.json();
      setBalance(data?.balance || 0);
    } catch {
      setError("Failed to load balance.");
    }
  };

  const loadTransactions = async () => {
    try {
      const res = await fetch("/api/economy/transactions");
      const data = await res.json();
      setTransactions(data?.transactions || []);
    } catch {
      setError("Failed to load transactions.");
    }
  };

  useEffect(() => {
    loadBalance();
    loadTransactions();
  }, []);

  const addCredits = async () => {
    try {
      setError(null);
      setResponse(null);

      if (!amount.trim()) {
        setError("Enter an amount.");
        return;
      }

      setLoading(true);

      const res = await fetch("/api/economy/add-credits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);

      await loadBalance();
      await loadTransactions();
      setAmount("");
    } catch {
      setError("Failed to add credits.");
      setLoading(false);
    }
  };

  const payout = async () => {
    try {
      setError(null);
      setResponse(null);

      if (!payoutAmount.trim()) {
        setError("Enter a payout amount.");
        return;
      }

      setLoading(true);

      const res = await fetch("/api/economy/payout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: payoutAmount }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);

      await loadBalance();
      await loadTransactions();
      setPayoutAmount("");
    } catch {
      setError("Payout failed.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">

      {/* BALANCE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Balance</h2>

        <div className="p-6 rounded-xl bg-black/40 border border-white/15">
          <p className="text-white/70 text-sm">Current Balance</p>
          <p className="text-4xl font-bold text-white mt-2">{balance} credits</p>
        </div>
      </section>

      {/* ADD CREDITS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Add Credits</h2>

        <input
          type="number"
          placeholder="Amount"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          onClick={addCredits}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Processing..." : "Add Credits"}
        </button>
      </section>

      {/* PAYOUT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Payout</h2>

        <input
          type="number"
          placeholder="Payout Amount"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={payoutAmount}
          onChange={(e) => setPayoutAmount(e.target.value)}
        />

        <button
          onClick={payout}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Processing..." : "Request Payout"}
        </button>
      </section>

      {/* TRANSACTIONS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Transactions</h2>

        <div className="space-y-3">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="p-4 rounded-xl bg-black/40 border border-white/15"
            >
              <p className="text-white">{tx.type}</p>
              <p className="text-white/60 text-sm">{tx.amount} credits</p>
              <p className="text-white/40 text-xs">{tx.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ERROR */}
      {error && (
        <div className="text-red-400 text-sm bg-red-900/20 border border-red-500/40 p-4 rounded-xl">
          {error}
        </div>
      )}

      {/* RESPONSE */}
      {response && (
        <pre className="bg-black/40 border border-white/15 p-4 rounded-xl text-white/80 text-sm overflow-auto">
          {response}
        </pre>
      )}
    </div>
  );
}
