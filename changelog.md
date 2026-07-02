# Changelog
 
## v1.6

- Standardized restored container design using a premium Red themed border (#ff453a) and background for all posts, comments, and replies.
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
