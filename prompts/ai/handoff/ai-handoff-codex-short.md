You are working on the Genesis Roofing website codebase.

Use this tool for structure/implementation:
- files
- data placement
- typed models
- helpers/selectors/services
- reusable components
- refactors
- preparation for later MPA conversion

Project rules:
- Genesis Roofing is a UK roofing company
- Site is currently an SPA and may later become an MPA
- Keep structure maintainable and practical
- Separate data, transformation, and rendering
- Prefer one source of truth per content type
- Do not duplicate datasets
- Avoid unnecessary visual redesign
- Change only files relevant to the task

Reviews rule:
- Use the provided reviews JSON as the canonical source
- Do not duplicate reviews into components or multiple files
- Support:
  - home page featured reviews
  - future full Reviews page
- Home page should normally consume a limited subset, e.g. 5
- Future load more/pagination/filtering should be supported structurally, not by duplicating content

Output rules:
- Make only the requested code/project changes
- Preserve working behaviour unless required otherwise
- Prefer maintainable structure over hacks

Task:
[INSERT TASK HERE]