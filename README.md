# ctx-options ("_Context options_")

-   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).(v4)

-   It shows 4 options or patterns for avoiding context "over-rendering"

## Problem:

The original problem of context "over-rendering" is illustrated in `src/Problem`

## Impact at Company Where I Worked:

- Clarified a critical misunderstanding of **React Context**, causing dev leadership to bypass it unnecessarily and reach for other solutions (Redux) where it would suffice
- Introduced a library for optimizing performance, fixing memory leaks, and eliminating unnecessary over-renders via [Why Did You Render](https://github.com/welldone-software/why-did-you-render) and a mix of standard solutions like `useSafeDispatch`
- `RTK` was chosen team-wide based on this proof-of-concept, and React Context was restored as a viable and primary solution for state management (both local and global)

## Options Explored:

-   **OPTION #1:** Splitting Context in `src/Option1-Split`
-   **OPTION #2:** Containers/Wrappers in `src/Option2-Containers`
-   **OPTION #4:** react-tracked in `src/Option4-react-tracked`
-   **OPTION #5:** redux toolkit (RTK) in `src/Option5-rtk`

*NOTE: This is based on [Dan Abramov's discussion of preventing re-renders](https://github.com/facebook/react/issues/15156#issuecomment-474590693). Option #3 (`useMemo`) and was skipped.*

###

## Quick Start:

-   clone the repo
-   run `npm i`
-   and fire it up with `npm start`
