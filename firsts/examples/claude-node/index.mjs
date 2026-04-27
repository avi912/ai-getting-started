#!/usr/bin/env node
// Claude (Anthropic) Node.js example using native fetch (Node 18+)
// Requires ANTHROPIC_API_KEY in the environment

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error('Error: set ANTHROPIC_API_KEY in the environment (or use .env and a loader)');
  process.exit(1);
}

const prompt = `Human: Summarize this repository in one paragraph for a developer who just opened it.\nAssistant:`;

async function callClaude() {
  const res = await fetch('https://api.anthropic.com/v1/complete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    },
    body: JSON.stringify({
      model: 'claude-2.1',
      prompt,
      max_tokens_to_sample: 300
    })
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('Request failed', res.status, text);
    process.exit(2);
  }

  const body = await res.json();
  // Anthropic's completion field is often `completion` but check the API response format for your model/version
  console.log(body.completion ?? JSON.stringify(body, null, 2));
}

callClaude().catch(err => {
  console.error('Error calling Claude:', err);
  process.exit(3);
});
