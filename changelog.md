# Changelog
 
## v1.8

- Fixed missing/restored comment collapsing behavior on New Reddit by wrapping them in custom collapsible elements with a tagline, a collapse/expand toggle button `[-]` / `[+]`, and nested replies container.
- Fixed collapsed comment visibility on Old Reddit by hiding only the restored comment body when collapsed, keeping the tagline and expander button visible and clickable.
- Fixed New Reddit child comment visibility by binding event listeners to the native `<details>` element's `toggle` event in `<shreddit-comment>` shadow DOMs, ensuring children are instantly hidden/revealed on collapse/expand.
- Fixed duplicate media previews inside posts and comments by using a `DOMParser`-based approach inside `addLinkMediaPreviews` to detect and filter out already-rendered media URLs.
- Fixed width overflow issues on both Old and New Reddit by setting `max-width: 100% !important`, adding horizontal scroll wrapper capabilities (`overflow-x: auto`) for large tables, and enforcing wrapping using `word-break: break-word`.
- Fixed child replies positioning on New Reddit by increasing the reply indentation (`margin-left: 44px`) to match native Reddit indentation aesthetics.

## v1.7

- Fixed false positive post restoration by targeting specific post notice/alert elements for removal detection instead of evaluating the entire page/post text content.
- Fixed link-only post restoration (such as Redgifs or media link posts) on New Reddit by extracting the post's text content, subtracting title and body text, and checking the remaining text for removal keywords (this supports warning banners inside shadow DOM elements).
- Fixed collapse logic on New Reddit by hiding injected restored comments whenever an ancestor comment thread container is closed (using `shreddit-comment[collapsed="true"]` selector), and removed the overly generic `[collapsed="true"]` selector that incorrectly hid restored comments when unrelated layout elements (like the sidebar drawer) were collapsed.
- Restored the comment tree insertion behavior for missing/lost comments on New Reddit from the previous working version, ensuring correct nested slot container rendering for deleted/shadowbanned comments.

## v1.6

- Standardized restored container design using a premium Red themed border (#ff453a) and background for all posts, comments, and replies.
- Fixed comment restoration match on Old Reddit by removing redundant DOM parent ID matching for native placeholders, resolving the missing parent comment restoration bug.
- Renamed the main IIFE function to `RedditRestoredV1` for codebase consistency.
- Fixed post text/gallery/media restoration on Old Reddit for posts deleted by user by adding `em.author` tag support and matching text indicators to prevent exit-early logic, and ensured restored post divs are not hidden by Old Reddit's native expando CSS.
- Fixed media/source link restoration on New Reddit for removed/deleted posts by bypassing layout visibility checks when the post is deleted.
- Integrated a fallback that fetches the official Reddit JSON structure to locate deleted comment IDs, resolving the search index delay for recently deleted comments on both Old and New Reddit.
- Restructured missing comment layout and nesting on New Reddit using custom styled containers that shift child replies 32px right, complete with native-looking vertical thread lines.
- Fixed positioning of the final/last reply in threads on both Old and New Reddit, ensuring they restore in their correct nested positions.
- Restored comment positioning: appends inside the native warning elements on New Reddit rather than replacing them, keeping the native "deleted/removed" notice visible.
- Restored media size constraints: restricted post media images/videos to max-width/max-height preview limits with a click-to-open original link.
- Fixed comment text color in dark mode to guarantee readability.
- Fixed querySelector string formatting spaces which caused crashes on Old Reddit.
- Fixed Old Reddit child comment restoration by improving tag ID parsing and adding the `noncollapsed` class.
- Added force cache bypass: Shift-clicking the status indicator now clears the local thread cache immediately.

## v1.5

- Improved restore reliability
- Improved old Reddit support
- Improved media and Redgifs fallback handling
- Added missing media notices
- Improved local cache/rescan behavior
