# Genesis Roofing — Decisions Log

## Project state
- Site is currently an SPA
- Site may later be converted into an MPA
- Keep current work compatible with that transition where reasonable
- Do not overengineer for MPA yet

## Tool boundaries
- Bolt owns UI, layout, styling, UX, page composition, and copy presentation
- Codex owns file structure, data placement, typed models, helpers, selectors, refactors, and implementation details
- Bolt must not invent canonical datasets
- Codex must not perform broad visual redesign unless explicitly requested

## Brand / UX rules
- Genesis Roofing is a UK roofing company
- Tone should be trustworthy, local, practical, established, and conversion-focused
- Avoid generic SaaS styling
- Prioritise clarity, trust, services, proof, and enquiries
- Do not redesign unrelated sections during focused tasks

## Content/data rules
- Keep data and presentation separate
- Prefer a single source of truth for each content type
- Do not duplicate business content across multiple files unless necessary

## Reviews
- Reviews data source: extracted reviews JSON
- Reviews JSON is the canonical source of truth for reviews content
- Home page should show 5 featured reviews
- Future Reviews page should reuse the same source
- Do not hardcode review cards if review data exists
- Future full reviews experience can support show more / load more / pagination on the dedicated Reviews page rather than bloating the home page

## Current preferred workflow
1. Use Codex first for structure/data changes
2. Use Bolt second for presentation/UI changes
3. Use Codex again only if Bolt output needs structural cleanup

## Naming / file conventions
- Keep AI handoff prompts in /ai/handoff
- Keep project rules in /ai/genesis-decisions.md
- Reuse the same handoff prompts and only swap the task block