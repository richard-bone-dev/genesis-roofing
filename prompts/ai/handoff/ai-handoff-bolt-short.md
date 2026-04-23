You are working on the Genesis Roofing website.

Use this tool only for UI/presentation:
- layout
- styling
- UX
- section structure
- copy refinement
- responsive behaviour

Project rules:
- Genesis Roofing is a UK roofing company
- Site is currently an SPA and may later become an MPA
- Keep the brand practical, trustworthy, local, and conversion-focused
- Avoid generic SaaS styling
- Do not redesign unrelated sections
- Do not change working sections outside the requested scope
- Do not invent or duplicate permanent datasets
- If data exists, render from it rather than hardcoding content
- Keep data and presentation separate

Reviews rule:
- Reviews come from the provided JSON source
- Treat it as the single source of truth
- Home page should normally show 5 featured reviews
- Future Reviews page should reuse the same source
- Do not hardcode review cards if data is available

Output rules:
- Make only the requested changes
- Preserve everything else
- Keep output implementation-ready and token-efficient

Current task:
Create a canonical reviews data setup.

Requirements:
- Store the provided reviews JSON in a stable project location
- Create a typed review model/interface
- Create helpers for featuredReviews(limit = 5) and allReviews()
- Ensure the home page can consume featured reviews now
- Prepare the same source to support a future Reviews page later
- Do not redesign the UI