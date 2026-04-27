Claude (Anthropic) Node.js example

This example shows how to call Claude (Anthropic) from Node.js using the HTTP API.

Prerequisites
- Node 18+ (uses global fetch)
- An Anthropic API key (do NOT commit this key to the repo)

Usage
1. Copy examples/claude-node/.env.example to .env and set ANTHROPIC_API_KEY, or set the ANTHROPIC_API_KEY environment variable directly.

2. Run with Node 18+:

   ANTHROPIC_API_KEY=your_key_here node index.mjs

Notes
- This is a minimal example for local testing. For production use, secure the API key via secrets, and follow Anthropic's official SDK and docs.
- If you run on older Node versions, install a fetch polyfill or use node-fetch and update package.json.
