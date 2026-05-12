export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          GitHub Commit Intelligence
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Score commit quality.<br />Predict bug risk before it ships.
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          CommitScore analyzes your GitHub commits in real-time — evaluating message quality, file change complexity, and historical bug patterns to give every commit a health score.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Scoring Commits — $11/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block"></span>
            <span className="text-[#8b949e] ml-2">commit analysis</span>
          </div>
          <div className="space-y-2">
            <div><span className="text-[#58a6ff]">commit</span> <span className="text-[#e3b341]">a3f9c12</span> <span className="text-[#8b949e]">— "fix stuff"</span></div>
            <div className="flex items-center gap-3">
              <span className="text-[#f85149] font-bold">Score: 23/100</span>
              <span className="bg-[#f8514920] text-[#f85149] text-xs px-2 py-0.5 rounded">HIGH BUG RISK</span>
            </div>
            <div className="text-[#8b949e] text-xs mt-2">↳ Vague message · 14 files changed · touches auth module</div>
            <div className="mt-3"><span className="text-[#58a6ff]">commit</span> <span className="text-[#e3b341]">b7d2e45</span> <span className="text-[#8b949e]">— "fix: validate JWT expiry in middleware"</span></div>
            <div className="flex items-center gap-3">
              <span className="text-[#3fb950] font-bold">Score: 91/100</span>
              <span className="bg-[#3fb95020] text-[#3fb950] text-xs px-2 py-0.5 rounded">LOW RISK</span>
            </div>
            <div className="text-[#8b949e] text-xs mt-2">↳ Clear scope · 2 files · linked issue #204</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold mb-1">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$11<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Per workspace · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited commit scoring",
              "GitHub webhook integration",
              "Bug risk predictions",
              "Team dashboard & history",
              "Slack & email alerts",
              "API access"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the scoring work?</h3>
            <p className="text-[#8b949e] text-sm">CommitScore evaluates commit messages for clarity and convention adherence, measures file change complexity, checks for linked issues, and correlates patterns with historical bug data from your repository to produce a 0–100 health score.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does it work with private repositories?</h3>
            <p className="text-[#8b949e] text-sm">Yes. CommitScore uses GitHub's OAuth app flow and webhook API. Your code never leaves GitHub — we only process commit metadata, diffs, and file paths.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Cancel from your billing dashboard at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
