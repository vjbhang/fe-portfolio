# FE-Portfolio

Deploy: [Netlify](https://app.netlify.com/projects/vjbstudio/overview)

## Log

- 26.3.26 (Thu): Made the timeline animation in flex. It is proving to be choppy
  - Decide to do it using transform
    - Choppy because it is recalculating layouts and 'reflows'
  - May cause loading issues for weaker computers

## Overview

> Summary from Codex on 4.14.26 (Tue)

**Project Readout**

This repo is a single-page [Next.js App Router](C:/Users/Vincent-N1/Code/fe-portfolio/app/layout.tsx) portfolio built with React 19, TypeScript, Tailwind v4, CSS Modules, and a little SCSS. The actual user experience lives almost entirely in [app/page.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/page.tsx:39): it layers a pixel-canvas background, looping video, dark overlay, header, hamburger menu, a bottom “mission sequence” control strip, and one active content panel at a time.

The content model is narrative and section-based, not route-based. There is only one page route, and the portfolio is split into nine numbered section components under [app/component/page](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/page): `0-Landing` through `8-About`, each representing a launch-stage metaphor for the product lifecycle. [DynamicPages.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/DynamicPages/DynamicPages.tsx:21) swaps those sections in and out with entry/exit animations instead of navigating between URLs.

**How The Horizontal Design Works**

The project has a horizontal-scroll visual language, but the core interaction is really state-driven paging rather than true multi-panel horizontal scrolling. In [app/page.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/page.tsx:46), wheel input accumulates until a threshold, then increments or decrements `pageIndex`; arrow keys and section-specific Enter handlers do the same. The container does call `scrollTo`, but because [Sequence.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/elements/Sequence.tsx:311) is `position: fixed` and [DynamicPages](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/DynamicPages/DynamicPages.tsx:62) renders one page at a time, the “horizontal scroll” is more of a controlled cinematic transition system than a literal horizontally scrolling document.

The strongest custom piece is [Sequence.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/elements/Sequence.tsx:84), which drives the bottom tracker: partition bars, rocket trajectory, orbital arc, checkpoint markers, replay affordances, and keyboard/click navigation. The transcript-style stage cards share a reusable shell: [MissionControlPrompt.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/elements/MissionControlPrompt/MissionControlPrompt.tsx) plus [AnimatedPageTranscript.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/elements/AnimatedPageTranscript/AnimatedPageTranscript.tsx:9), which animates mission copy, types “Vincent AI” responses, and reveals process-highlight cards. Tailwind v4 theme tokens and local fonts are defined in [app/globals.css](C:/Users/Vincent-N1/Code/fe-portfolio/app/globals.css:100), while several components also use CSS Modules/SCSS for bespoke motion and presentation.

**What Else Is In Here**

There are custom web components for animated pixel canvases in [AnimatedBG](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/elements/AnimatedBG/AnimatedBG.tsx:13) and [PixelCanvasBackground.js](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/elements/AnimatedBG/PixelCanvasBackground.js:74), plus a similar effect for buttons. Assets in [public](C:/Users/Vincent-N1/Code/fe-portfolio/public) include the background video, tracker/rocket SVGs, keypad icons, and local font files. The header uses a live clock and timer via [Clock.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/elements/Clock.tsx:21) and `Timer.tsx`.

There are also a few signs of in-progress or stale work:

- [app/layout.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/layout.tsx:15) still has default scaffold metadata and imports Google Geist fonts even though the app also defines local fonts.
- [app/tailwind.config.js](C:/Users/Vincent-N1/Code/fe-portfolio/app/tailwind.config.js:1) looks like leftover Vite-style config and is not how Tailwind v4 is configured in this repo.
- [8-About.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/page/8-About.tsx:2) imports `GradientRotateButton` but doesn’t use it.
- [KeypadEnter.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/elements/Keypads/KeypadEnter.tsx:11) and a few comments/strings show encoding corruption.
- `ButtonGroup`, `ScrollIndicator`, and `Now.tsx` look unused or exploratory.

**Validation**

I ran the repo checks:

- `npm run lint` fails on one real error in [8-About.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/component/page/8-About.tsx:66) for an unescaped apostrophe, plus warnings for the unused import and anonymous default export in [app/tailwind.config.js](C:/Users/Vincent-N1/Code/fe-portfolio/app/tailwind.config.js:1).
- `npm run build` fails in this environment because [app/layout.tsx](C:/Users/Vincent-N1/Code/fe-portfolio/app/layout.tsx:2) uses `next/font/google`, and the build cannot fetch Geist from Google.

Net: yes, this is a Next/React/Tailwind portfolio with a horizontal-scrolling presentation style, but its architecture is really a single-route, stateful, animated “mission timeline” app with strong custom interaction design and a few unfinished/stale edges around config, lint cleanup, and font loading.
