// ==UserScript==
// @name        Reddit Restore
// @namespace   reddit-restore
// @version     1.7
// @description Restores deleted Reddit posts, comments, usernames, images, videos, and media using Arctic Shift with PullPush fallback.
// @author      brainbaker
// @license     MIT
// @icon        data:image/png;base64,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
// @match       https://www.reddit.com/r/*/comments/*
// @match       https://old.reddit.com/r/*/comments/*
// @match       https://new.reddit.com/r/*/comments/*
// @match       https://sh.reddit.com/r/*/comments/*
// @connect     arctic-shift.photon-reddit.com
// @connect     api.pullpush.io
// @connect     i.redd.it
// @connect     preview.redd.it
// @connect     v.redd.it
// @connect     media.giphy.com
// @connect     www.redgifs.com
// @connect     api.redgifs.com
// @connect     media.redgifs.com
// @grant       GM_xmlhttpRequest
// @run-at      document-end
// ==/UserScript==
(function RedditRestoredV1() {
    "use strict";
    const CFG = {
        arctic: "https://arctic-shift.photon-reddit.com",
        pullpush: "https://api.pullpush.io",
        batchSize: 100,
        observeDebounce: 500,
        maxObserverPasses: 24,
        cacheTTL: 6 * 60 * 60 * 1e3
    };
    const REMOVED_RE = /^\s*\[(?:deleted|removed)\]\s*$|deleted by user|removed by (?:moderator|reddit)|sorry, this post (?:was|has been) (?:removed|deleted)|content is no longer available|this comment (?:has been|was) (?:removed|deleted)|this post (?:has been|was) (?:removed|deleted)|awaiting moderator approval/i;
    const IMAGE_RE = /\.(?:png|jpe?g|gif|webp|avif)(?:[?#].*)?$/i;
    const VIDEO_RE = /\.(?:mp4|webm|mov)(?:[?#].*)?$/i;
    const state = {
        postId: null,
        running: false,
        observerPasses: 0,
        doneComments: new Set,
        lastStats: null,
        originalView: false,
        threadComments: null,
        redgifsToken: null,
        observer: null
    };
    function esc(str) {
        return String(str ?? "").replace(/[&<>"']/g, ch => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[ch]));
    }
    function unhtml(str) {
        return String(str ?? "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    }
    function normId(id) {
        return String(id || "").replace(/^t[13]_/, "").trim();
    }
    function looksRemoved(text) {
        return REMOVED_RE.test(String(text || "").trim());
    }
    function isDeletedAuthor(text) {
        return /^\s*\[?deleted\]?\s*$/i.test(String(text || "").trim());
    }
    function currentPostId() {
        return (location.pathname.match(/\/comments\/([a-z0-9]+)(?:\/|$)/i) || [])[1] || null;
    }
    function unique(a) {
        return [...new Set(a.filter(Boolean))];
    }
    function log(...a) {
        console.debug("[RU Enhanced]", ...a);
    }
    function status(sign, detail) {
        let el = document.getElementById("ru-enhanced-status");
        if (!el) {
            el = document.createElement("button");
            el.id = "ru-enhanced-status";
            el.type = "button";
            el.addEventListener("click", ev => {
                if (ev.shiftKey) run(true); else toggleOriginalView();
            });
            document.documentElement.appendChild(el);
        }
        el.textContent = sign;
        el.title = detail;
        el.setAttribute("aria-label", detail);
    }
    function restoredTotal() {
        const st = state.lastStats;
        return st ? st.postText + st.postMedia + st.authors + st.commentAuthors + st.commentBodies : 0;
    }
    function setOriginalView(on) {
        state.originalView = !!on;
        document.querySelectorAll("[data-ru-kind], [data-ru-comment]").forEach(el => {
            el.style.display = on ? "none" : "";
        });
        document.querySelectorAll("[data-ru-author-link]").forEach(el => {
            el.style.display = on ? "none" : "";
        });
        document.querySelectorAll("[data-ru-hidden-deleted-author]").forEach(el => {
            el.style.display = on ? "" : "none";
        });
        document.querySelectorAll('[data-ru-title-modified="true"]').forEach(el => {
            if (on) {
                if (!el.hasAttribute("data-ru-restored-text")) el.setAttribute("data-ru-restored-text", el.textContent || "");
                el.textContent = el.getAttribute("data-ru-orig-text") || "[removed]";
            } else {
                el.textContent = el.getAttribute("data-ru-restored-text") || el.textContent || "";
            }
        });
        document.querySelectorAll('a[data-ru-author-modified="true"]').forEach(el => {
            if (on) {
                if (!el.hasAttribute("data-ru-restored-text")) el.setAttribute("data-ru-restored-text", el.textContent || "");
                if (!el.hasAttribute("data-ru-restored-href")) el.setAttribute("data-ru-restored-href", el.getAttribute("href") || "");
                el.textContent = el.getAttribute("data-ru-orig-text") || "[deleted]";
                el.setAttribute("href", el.getAttribute("data-ru-orig-href") || "#");
            } else {
                el.textContent = el.getAttribute("data-ru-restored-text") || el.textContent || "";
                el.setAttribute("href", el.getAttribute("data-ru-restored-href") || el.getAttribute("href") || "#");
            }
        });
        if (on) status("O", "Original view: showing Reddit deleted/removed placeholders. Click to show restored content. Shift-click rescans archives."); else if (restoredTotal()) status("✓", `Restored view: showing recovered content (${restoredTotal()} item(s)). Click to show original deleted/removed placeholders. Shift-click rescans.`);
    }
    function toggleOriginalView() {
        if (!restoredTotal() && !document.querySelector("[data-ru-kind], [data-ru-comment], [data-ru-author-link], [data-ru-title-modified], [data-ru-author-modified]")) {
            run(true);
            return;
        }
        setOriginalView(!state.originalView);
    }
    function ensureStyle() {
        if (document.getElementById("ru-enhanced-style")) return;
        const st = document.createElement("style");
        st.id = "ru-enhanced-style";
        st.textContent = `
      #ru-enhanced-status{position:fixed!important;right:12px!important;bottom:12px!important;z-index:2147483647!important;width:32px!important;height:32px!important;min-width:32px!important;min-height:32px!important;border-radius:50%!important;border:3px solid #ff453a!important;background:#fff!important;color:#128a13!important;font:700 18px/26px Arial,sans-serif!important;box-shadow:0 2px 8px #0006!important;cursor:pointer!important;padding:0!important;margin:0!important;text-align:center!important;appearance:none!important;-webkit-appearance:none!important;box-sizing:border-box!important;overflow:hidden!important;display:flex!important;align-items:center!important;justify-content:center!important}
      .ru-enhanced-selftext,.ru-enhanced-media,.ru-enhanced-comment-body{display:block!important;clear:both!important;width:auto!important;max-width:min(860px,100%)!important;border-left:4px solid #ff453a;margin:8px 0!important;padding:10px!important;background:rgba(255,69,58,.08);border-radius:8px;box-sizing:border-box;white-space:normal!important;word-break:normal!important;overflow-wrap:break-word!important;line-height:1.45!important;font-size:14px!important;font-weight:normal!important;font-style:normal!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif!important;color:var(--color-neutral-content-strong,var(--color-text-primary,inherit))!important}       .ru-child-comment{margin-left:44px!important;position:relative!important;display:block!important}.ru-child-comment::before{content:""!important;position:absolute!important;left:-20px!important;top:-24px!important;bottom:0!important;width:2px!important;background-color:var(--color-neutral-border-weak,var(--color-neutral-border,rgba(128,128,128,0.2)))!important}
      .ru-enhanced-old-post-target{display:block!important}
      shreddit-comment[data-ru-collapsed="true"] .ru-enhanced-injected-comment,.Comment.is-collapsed .ru-enhanced-injected-comment,.ru-enhanced-injected-comment.collapsed{display:none!important}
      .ru-enhanced-comment-body .md,.ru-enhanced-comment-body p,.ru-enhanced-selftext .md,.ru-enhanced-selftext p{white-space:normal!important;word-break:normal!important;overflow-wrap:break-word!important;display:block!important;width:auto!important;max-width:100%!important;font-size:14px!important;font-weight:normal!important;line-height:1.45!important}
      .ru-enhanced-comment-body img,.ru-enhanced-comment-body video,.ru-enhanced-media img,.ru-enhanced-media video{max-width:min(520px,100%)!important;max-height:500px!important;object-fit:contain!important;height:auto!important;border-radius:8px;display:block!important;margin:6px 0!important}
      .ru-enhanced-comment-body{position:relative!important}.ru-enhanced-comment-body a.ru-enhanced-author{color:#7dd3fc!important}
      .ru-enhanced-author{color:#24a0ed!important;text-decoration:none!important;font-weight:600}.ru-enhanced-author:hover{text-decoration:underline!important}
      .ru-enhanced-selftext+.ru-enhanced-media,.ru-enhanced-media+.ru-enhanced-selftext{margin-top:6px!important}.ru-enhanced-media{min-width:0!important}`;
        document.head.appendChild(st);
    }
    function cacheKey(type, id) {
        return `reddit-restore:${type}:${id}`;
    }
    function cacheRead(type, id) {
        try {
            const raw = localStorage.getItem(cacheKey(type, id));
            if (!raw) return null;
            const item = JSON.parse(raw);
            if (!item || Date.now() - item.t > CFG.cacheTTL) {
                localStorage.removeItem(cacheKey(type, id));
                return null;
            }
            const v = item.v;
            if (v == null) return null;
            if (Array.isArray(v) && v.length === 0) return null;
            if (typeof v === 'object' && !Array.isArray(v) && !v.id && !v.name && !v.author) return null;
            return v;
        } catch (_e) {
            return null;
        }
    }
    function cacheWrite(type, id, value) {
        if (!id || value == null) return;
        if (Array.isArray(value) && value.length === 0) return;
        if (typeof value === 'object' && !Array.isArray(value) && !value.id && !value.name && !value.author) return;
        try {
            localStorage.setItem(cacheKey(type, id), JSON.stringify({
                t: Date.now(),
                v: value
            }));
        } catch (_e) { }
    }
    function restoredCommentPresent(el, id) {
        return !!el.querySelector(`[data-ru-comment="${id}"]`);
    }

    function xhrJSON(url) {
        return new Promise((resolve, reject) => {
            const finish = (code, text) => {
                if (code < 200 || code >= 300) return reject(new Error(`HTTP ${code}`));
                try {
                    resolve(JSON.parse(text));
                } catch (e) {
                    reject(e);
                }
            };
            const fn = typeof GM !== "undefined" && GM.xmlHttpRequest ? GM.xmlHttpRequest.bind(GM) : typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : null;
            if (fn) fn({
                method: "GET",
                url: url,
                headers: {
                    Accept: "application/json"
                },
                timeout: 3e4,
                onload: r => finish(r.status, r.responseText),
                onerror: reject,
                ontimeout: () => reject(new Error("timeout"))
            }); else fetch(url, {
                credentials: "omit",
                headers: {
                    Accept: "application/json"
                }
            }).then(async r => finish(r.status, await r.text())).catch(reject);
        });
    }
    async function getFirst(urls) {
        let last;
        for (const u of urls) {
            try {
                const j = await xhrJSON(u);
                const item = j?.data?.[0] || null;
                if (item) return item;
            } catch (e) {
                last = e;
                log("source failed", u, e);
            }
        }
        if (last) throw last;
        return null;
    }
    async function fetchPost(id) {
        return getFirst([`${CFG.arctic}/api/posts/ids?ids=${encodeURIComponent(id)}&md2html=true`, `${CFG.pullpush}/reddit/search/submission/?ids=${encodeURIComponent(id)}&size=1`]);
    }
    async function fetchCommentsByIds(ids) {
        const map = new Map;
        for (let i = 0; i < ids.length; i += CFG.batchSize) {
            const chunk = ids.slice(i, i + CFG.batchSize).map(normId);
            let got = [];
            try {
                got = (await xhrJSON(`${CFG.arctic}/api/comments/ids?ids=${encodeURIComponent(chunk.join(","))}&md2html=true`)).data || [];
            } catch (e) {
                log("arctic comments failed", e);
            }
            const found = new Set(got.map(c => normId(c.id || c.name)));
            const missing = chunk.filter(x => !found.has(x));
            if (missing.length) {
                const baseUrl = `${CFG.pullpush}/reddit/search/comment/?ids=`;
                const maxUrlLen = 2000;
                let batch = [];
                for (const mid of missing) {
                    const testUrl = baseUrl + encodeURIComponent([...batch, mid].join(",")) + `&size=${batch.length + 1}`;
                    if (testUrl.length > maxUrlLen && batch.length > 0) {
                        try {
                            got = got.concat((await xhrJSON(`${baseUrl}${encodeURIComponent(batch.join(","))}&size=${batch.length}`)).data || []);
                        } catch (e) {
                            log("pullpush comments batch failed", e);
                        }
                        batch = [mid];
                    } else {
                        batch.push(mid);
                    }
                }
                if (batch.length) {
                    try {
                        got = got.concat((await xhrJSON(`${baseUrl}${encodeURIComponent(batch.join(","))}&size=${batch.length}`)).data || []);
                    } catch (e) {
                        log("pullpush comments failed", e);
                    }
                }
            }
            got.forEach(c => map.set(normId(c.id || c.name), c));
        }
        return map;
    }
    function extractIdsFromRedditJSON(node, ids = []) {
        if (!node) return ids;
        if (Array.isArray(node)) {
            node.forEach(item => extractIdsFromRedditJSON(item, ids));
        } else if (typeof node === 'object') {
            if (node.kind === 't1' && node.data && node.data.id) {
                ids.push(node.data.id);
            }
            if (node.data && node.data.replies) {
                extractIdsFromRedditJSON(node.data.replies, ids);
            }
            if (node.data && node.data.children) {
                node.data.children.forEach(cId => {
                    if (cId) ids.push(cId);
                });
            }
        }
        return ids;
    }
    async function fetchThreadComments(postId) {
        const cached = cacheRead("thread", postId);
        if (cached) return cached;
        try {
            const pageSize = 100;
            let allComments = [];
            let pages = 0;
            const maxPages = 100;
            const seen = new Set;
            let lastCreated = null;
            do {
                const beforeParam = lastCreated != null ? `&before=${lastCreated}` : "";
                const j = await xhrJSON(`${CFG.arctic}/api/comments/search?link_id=${encodeURIComponent(postId)}&limit=${pageSize}&md2html=true&sort=desc${beforeParam}`);
                const arr = (j?.data || []).filter(c => { const id = normId(c.id || c.name); if (!id || seen.has(id)) return false; seen.add(id); return true; });
                if (!arr.length) break;
                allComments = allComments.concat(arr);
                const oldest = arr.reduce((min, c) => (c.created_utc || c.created || Infinity) < min ? (c.created_utc || c.created) : min, Infinity);
                if (oldest === Infinity || oldest === lastCreated) break;
                lastCreated = oldest;
                pages++;
            } while (pages < maxPages);
            log("thread comments fetched from Arctic Shift:", allComments.length, "comments in", pages, "pages for post", postId);
            try {
                const redditJsonUrl = location.href.split('?')[0] + '.json?limit=500';
                const redditJson = await xhrJSON(redditJsonUrl);
                if (redditJson && Array.isArray(redditJson) && redditJson[1]) {
                    const redditIds = extractIdsFromRedditJSON(redditJson[1]);
                    const missingIds = redditIds.filter(id => {
                        const nId = normId(id);
                        return nId && !seen.has(nId);
                    });
                    if (missingIds.length > 0) {
                        log("Found missing comment IDs from Reddit JSON:", missingIds.length);
                        const extraCommentsMap = await fetchCommentsByIds(missingIds);
                        extraCommentsMap.forEach(c => {
                            const id = normId(c.id || c.name);
                            if (id && !seen.has(id)) {
                                seen.add(id);
                                allComments.push(c);
                            }
                        });
                    }
                }
            } catch (e) {
                log("Failed to fetch/parse official Reddit thread JSON:", e);
            }
            cacheWrite("thread", postId, allComments);
            return allComments;
        } catch (e) {
            log("thread comments failed", e);
            return [];
        }
    }
    function threadMap(arr) {
        const byId = new Map, children = new Map;
        (arr || []).forEach(c => {
            const id = normId(c.id || c.name);
            if (!id) return;
            byId.set(id, c);
            const p = normId(c.parent_id || "");
            if (p) {
                if (!children.has(p)) children.set(p, []);
                children.get(p).push(c);
            }
        });
        return { byId, children };
    }

    function urlWithoutEscapedAmp(url) {
        return String(url || "").replace(/&amp;/g, "&");
    }
    function mediaTypeFromURL(url) {
        url = urlWithoutEscapedAmp(url);
        if (/\.(?:png|jpe?g|gif|webp|avif)(?:[?#].*)?$/i.test(url)) return "image";
        if (/\.(?:mp4|webm|mov)(?:[?#].*)?$/i.test(url)) return "video";
        if (/\/preview\.redd\.it\//i.test(url) || /\/i\.redd\.it\//i.test(url) || /format=(?:pjpg|jpg|png|webp)/i.test(url)) return "image";
        if (/\/v\.redd\.it\//i.test(url)) return "video-link";
        return "";
    }
    function mediaPreviewHTML(url, label = "media preview") {
        const type = mediaTypeFromURL(url);
        url = esc(urlWithoutEscapedAmp(url));
        if (type === "image") return `<a href="${url}" target="_blank" rel="noopener noreferrer"><img src="${url}" alt="${esc(label)}" loading="lazy" referrerpolicy="no-referrer"></a>`;
        if (type === "video") return `<video controls preload="metadata" src="${url}"></video>`;
        if (type === "video-link") return `<div class="ru-enhanced-links"><a href="${url}" target="_blank" rel="noopener noreferrer">🎞️ open archived video/media</a></div>`;
        return "";
    }
    function addLinkMediaPreviews(html) {
        const seen = new Set;
        let previews = "";
        String(html || "").replace(/<a\b[^>]*href=(['"])(.*?)\1[^>]*>/gi, (_m, _q, href) => {
            const url = urlWithoutEscapedAmp(href);
            if (!seen.has(url) && mediaTypeFromURL(url)) {
                seen.add(url);
                previews += mediaPreviewHTML(url, "comment media");
            }
            return _m;
        });
        String(html || "").replace(/https?:\/\/[^\s<>'"]+/gi, url => {
            url = url.replace(/[),.;]+$/g, "");
            if (!seen.has(url) && mediaTypeFromURL(url)) {
                seen.add(url);
                previews += mediaPreviewHTML(url, "comment media");
            }
            return url;
        });
        return previews ? `${html}<div class="ru-enhanced-comment-media">${previews}</div>` : html;
    }
    function fixArchivedInlineMedia(html, fallbackText = "") {
        let out = String(html || "");
        out = out.replace(/src=(['"])(?:giphy%7C|giphy\|)([A-Za-z0-9_-]+)\1/gi, "src=$1https://media.giphy.com/media/$2/giphy.gif$1");
        out = out.replace(/data-media-id=(['"])(?:giphy\|)([A-Za-z0-9_-]+)\1/gi, 'data-media-id=$1giphy|$2$1 data-ru-giphy="https://media.giphy.com/media/$2/giphy.gif"');
        if (!/<img\b|<video\b/i.test(out) && fallbackText) {
            out = out.replace(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/gi, '<img src="$2" alt="$1" loading="lazy" referrerpolicy="no-referrer">');
            out = out.replace(/!\[([^\]]*)\]\(giphy\|([A-Za-z0-9_-]+)\)/gi, '<img src="https://media.giphy.com/media/$2/giphy.gif" alt="$1" loading="lazy" referrerpolicy="no-referrer">');
        }
        return addLinkMediaPreviews(out);
    }
    function htmlFrom(obj, field) {
        const html = obj?.[`${field}_html`];
        if (html && !looksRemoved(html)) return fixArchivedInlineMedia(unhtml(html), obj?.[field] || "");
        const text = obj?.[field];
        if (!text || looksRemoved(text)) return "";
        const withMedia = fixArchivedInlineMedia(esc(text), text);
        return `<div class="md"><p>${withMedia.replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br>")}</p></div>`;
    }
    function isSelfOrPermalinkURL(p, url) {
        url = unhtml(url || "");
        if (!url) return true;
        const pid = currentPostId();
        if (p?.is_self || /^self\./i.test(p?.domain || "")) return true;
        if (/reddit\.com\/r\/[^/]+\/comments\//i.test(url)) return true;
        if (pid && new RegExp(`/comments/${pid}(?:/|$)`, "i").test(url)) return true;
        return false;
    }
    function redgifsSlug(url) {
        url = unhtml(url || "");
        const m = url.match(/(?:www\.|v3\.)?redgifs\.com\/(?:watch|ifr)\/([a-z0-9-]+)/i);
        return m ? m[1] : "";
    }
    function redgifsEmbedURL(url) {
        const slug = redgifsSlug(url);
        return slug ? `https://www.redgifs.com/ifr/${slug}` : "";
    }
    function redgifsWatchURL(slugOrUrl) {
        const slug = redgifsSlug(slugOrUrl) || slugOrUrl;
        return slug ? `https://www.redgifs.com/watch/${slug}` : "";
    }

    function postContentTarget(root) {
        if (isOldReddit() && root.matches?.('.thing.link, .link')) {
            const entry = root.querySelector(':scope > .entry') || root.querySelector('.entry') || root;
            let expando = entry.querySelector(':scope > .expando') || root.querySelector(':scope > .expando');
            if (!expando) {
                expando = document.createElement('div');
                expando.className = 'expando ru-enhanced-old-post-target';
                const buttons = entry.querySelector(':scope > .flat-list.buttons, :scope > ul.buttons');
                if (buttons) buttons.insertAdjacentElement('beforebegin', expando); else entry.appendChild(expando);
            }
            return expando;
        }
        return root.querySelector?.(".entry, .expando") || root;
    }

    function oembedURL(p) {
        const html = p?.secure_media?.oembed?.html || p?.media?.oembed?.html || "";
        const m = unhtml(html).match(/<iframe[^>]+src=["']([^"']+)["']/i);
        return m ? m[1] : "";
    }

    function mediaCandidates(p) {
        const out = [];
        const norm = url => unhtml(url || "").replace(/^http:\/\//i, "https://").replace(/[?#].*$/, "").toLowerCase();
        const add = (url, label, type, original = "", poster = "") => {
            url = unhtml(url || "");
            original = unhtml(original || "");
            poster = unhtml(poster || "");
            if (!/^https?:\/\//i.test(url)) return;
            const slug = redgifsSlug(url);
            const key = slug ? `redgifs:${slug.toLowerCase()}` : `${type}:${norm(url)}`;
            if (!out.some(x => x.key === key)) out.push({ url, label, type, original, poster, key });
        };
        const sourceURL = unhtml(p?.url || "");
        const oe = p?.secure_media?.oembed || p?.media?.oembed || {};
        const oeURL = oembedURL(p);
        const rg = redgifsEmbedURL(sourceURL) || redgifsEmbedURL(oeURL);
        if (rg) {
            add(rg, "Redgifs", "redgifs", sourceURL || oeURL || rg, oe.thumbnail_url || "");
            return out;
        }
        const hasRealMediaObject = !!(p?.secure_media?.reddit_video || p?.media?.reddit_video || p?.is_gallery || p?.gallery_data?.items?.length || Object.keys(p?.media_metadata || {}).length || oeURL);
        if (isSelfOrPermalinkURL(p, sourceURL) && !hasRealMediaObject) return out;
        const rv = p?.secure_media?.reddit_video || p?.media?.reddit_video;
        if (rv) {
            add(rv.fallback_url, "video", "video", "", rv.scrubber_media_url || "");
            add(rv.hls_url, "hls stream", "link");
            add(rv.dash_url, "dash stream", "link");
        }
        const md = p?.media_metadata || {};
        const gallery = p?.gallery_data?.items || Object.keys(md).map(media_id => ({ media_id }));
        gallery.forEach(it => {
            const m = md[it.media_id] || {};
            add(m.s?.u || m.s?.gif || m.p?.slice?.(-1)?.[0]?.u, it.caption || "gallery image", "image");
        });
        if (oeURL) add(oeURL, oe.provider_name || "embed", "embed", sourceURL || oeURL, oe.thumbnail_url || "");
        if (!isSelfOrPermalinkURL(p, sourceURL)) add(sourceURL, p?.domain || "source", IMAGE_RE.test(sourceURL) ? "image" : VIDEO_RE.test(sourceURL) ? "video" : "link");
        const videoLike = p?.is_video || VIDEO_RE.test(sourceURL) || /video|gif/i.test(p?.post_hint || "") || !!rv || !!oeURL;
        if (videoLike && !out.some(x => ["image", "video", "embed", "redgifs"].includes(x.type))) {
            const preview = p?.preview?.images?.[0];
            add(preview?.source?.url || preview?.resolutions?.slice?.(-1)?.[0]?.url, "video preview", "image");
        }
        return out;
    }
    function mediaHTML(p) {
        const c = mediaCandidates(p);
        if (!c.length) return "";
        const embeds = c.filter(x => x.type === "image" || x.type === "video" || x.type === "embed" || x.type === "redgifs" || IMAGE_RE.test(x.url) || VIDEO_RE.test(x.url)).slice(0, 12).map(x => {
            const u = esc(x.url), cap = esc(x.label || x.url);
            if (x.type === "redgifs") {
                const slug = redgifsSlug(x.url);
                const open = esc(x.original || redgifsWatchURL(slug) || x.url);
                const poster = esc(x.poster || "");
                const thumb = poster ? `<div class="rr-redgifs-thumb"><img src="${poster}" loading="lazy" referrerpolicy="no-referrer"><span class="rr-redgifs-play">▶</span></div>` : `<div class="rr-media-status">Loading Redgifs…</div>`;
                return `<figure><div class="rr-redgifs-box" data-rr-redgifs-id="${esc(slug)}" data-rr-redgifs-url="${open}">${thumb}<a class="rr-redgifs-link" href="${open}" target="_blank" rel="noopener noreferrer">open Redgifs</a></div><figcaption>${cap}</figcaption></figure>`;
            }
            if (x.type === "embed") return `<figure><iframe src="${u}" allow="autoplay; fullscreen; encrypted-media" loading="lazy"></iframe><a class="rr-redgifs-link" href="${u}" target="_blank" rel="noopener noreferrer">open media</a><figcaption>${cap}</figcaption></figure>`;
            if (x.type === "video" || VIDEO_RE.test(x.url)) return `<figure><video controls loop playsinline preload="metadata" ${x.poster ? `poster="${esc(x.poster)}"` : ""} src="${u}"></video><figcaption>${cap}</figcaption></figure>`;
            return `<figure><a href="${u}" target="_blank" rel="noopener noreferrer"><img loading="lazy" referrerpolicy="no-referrer" src="${u}"></a><figcaption>${cap}</figcaption></figure>`;
        }).join("");
        const links = c.map(x => `<li><a href="${esc(x.original || x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.label || "url")}</a></li>`).join("");
        return `<div class="ru-enhanced-media" data-ru-kind="media" slot="text-body"><div class="ru-enhanced-meta">↺ restored deleted media/source</div>${embeds ? `<div class="ru-enhanced-grid">${embeds}</div>` : ""}<details class="ru-enhanced-links" open><summary>source links</summary><ul>${links}</ul></details></div>`;
    }
    async function redgifsToken() {
        if (state.redgifsToken) return state.redgifsToken;
        const j = await xhrJSON('https://api.redgifs.com/v2/auth/temporary');
        state.redgifsToken = j?.token || "";
        return state.redgifsToken;
    }
    function setRedgifsStatus(box, message, link) {
        let st = box.querySelector('.rr-redgifs-status');
        if (!st) {
            st = document.createElement('div');
            st.className = 'rr-media-status rr-redgifs-status';
            box.appendChild(st);
        }
        st.innerHTML = `${esc(message)}${link ? `<br><a href="${esc(link)}" target="_blank" rel="noopener noreferrer">open Redgifs link</a>` : ""}`;
    }
    async function resolveRedgifsVideos(root = document) {
        const all = [...root.querySelectorAll('[data-rr-redgifs-id]')];
        const seen = new Set;
        all.forEach(el => {
            const id = (el.getAttribute('data-rr-redgifs-id') || '').toLowerCase();
            if (!id) return;
            if (seen.has(id)) el.closest('figure')?.remove(); else seen.add(id);
        });
        const boxes = [...root.querySelectorAll('[data-rr-redgifs-id]')].filter(el => !el.getAttribute('data-rr-redgifs-done'));
        if (!boxes.length) return;
        let token = "";
        try { token = await redgifsToken(); } catch (_e) { }
        for (const box of boxes) {
            const id = box.getAttribute('data-rr-redgifs-id');
            if (!id) continue;
            box.setAttribute('data-rr-redgifs-done', '1');
            const fallback = box.getAttribute('data-rr-redgifs-url') || redgifsWatchURL(id);
            try {
                const j = await new Promise((resolve, reject) => {
                    const fn = typeof GM !== "undefined" && GM.xmlHttpRequest ? GM.xmlHttpRequest.bind(GM) : typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : null;
                    const url = `https://api.redgifs.com/v2/gifs/${encodeURIComponent(id)}`;
                    if (fn) fn({ method: 'GET', url, headers: { Accept: 'application/json', Authorization: `Bearer ${token}` }, onload: r => { try { resolve(JSON.parse(r.responseText || '{}')); } catch (e) { reject(e); } }, onerror: reject, ontimeout: reject });
                    else fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()).then(resolve).catch(reject);
                });
                const urls = j?.gif?.urls || {};
                const src = urls.hd || urls.sd;
                const poster = urls.poster || urls.thumbnail || "";
                const open = urls.html || fallback;
                if (src) {
                    box.querySelector('.rr-redgifs-status')?.remove();
                    let wrap = box.querySelector('.rr-redgifs-video-wrap');
                    if (!wrap) {
                        wrap = document.createElement('div');
                        wrap.className = 'rr-redgifs-video-wrap';
                        box.appendChild(wrap);
                    }
                    if (isOldReddit()) {
                        wrap.innerHTML = `<video controls autoplay muted loop playsinline preload="metadata" ${poster ? `poster="${esc(poster)}"` : ''} src="${esc(src)}"></video>`;
                    } else {
                        wrap.innerHTML = `<iframe src="https://www.redgifs.com/ifr/${esc(id)}?autoplay=0" frameborder="0" scrolling="no" allowfullscreen style="width:100%; height: 350px; border-radius: 8px; margin-top: 8px;"></iframe>`;
                    }
                    const link = box.querySelector('.rr-redgifs-link');
                    if (link) link.href = open;
                    attachMediaFailureHandlers(wrap);
                } else {
                    const gone = /GifDeleted|deleted|410/i.test(String(j?.error?.code || j?.error?.description || ""));
                    setRedgifsStatus(box, gone ? 'Redgifs media is deleted at source.' : 'Could not load Redgifs video here.', fallback);
                }
            } catch (_e) {
                setRedgifsStatus(box, 'Could not load Redgifs video here.', fallback);
            }
        }
    }

    function unavailableMediaBox(url, kind = "image") {
        const msg = kind === "video" ? "Video/media is probably deleted or unavailable." : "Image/media is probably deleted or unavailable.";
        return `<div class="rr-media-status">${msg}${url ? `<br><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">open media link</a>` : ""}</div>`;
    }
    function attachMediaFailureHandlers(root = document) {
        root.querySelectorAll('.ru-enhanced-media img, .ru-enhanced-comment-body img').forEach(img => {
            if (img.getAttribute('data-ru-fallback-bound')) return;
            img.setAttribute('data-ru-fallback-bound', '1');
            const fail = () => {
                const url = img.closest('a')?.href || img.src || "";
                const fig = img.closest('figure');
                if (fig) fig.innerHTML = unavailableMediaBox(url, "image");
                else img.replaceWith(document.createRange().createContextualFragment(unavailableMediaBox(url, "image")));
            };
            img.addEventListener('error', fail, { once: true });
            if (img.complete && img.naturalWidth === 0) fail();
            setTimeout(() => { if (img.isConnected && img.complete && img.naturalWidth === 0) fail(); }, 3500);
        });
        root.querySelectorAll('.ru-enhanced-media video, .ru-enhanced-comment-body video').forEach(video => {
            if (video.getAttribute('data-ru-fallback-bound')) return;
            video.setAttribute('data-ru-fallback-bound', '1');
            const fail = () => {
                const url = video.currentSrc || video.src || "";
                const rgBox = video.closest('[data-rr-redgifs-id]');
                if (rgBox) {
                    video.closest('.rr-redgifs-video-wrap')?.remove();
                    setRedgifsStatus(rgBox, 'Could not play Redgifs video here.', rgBox.getAttribute('data-rr-redgifs-url') || url);
                    return;
                }
                const fig = video.closest('figure');
                if (fig) fig.innerHTML = unavailableMediaBox(url, "video");
                else video.replaceWith(document.createRange().createContextualFragment(unavailableMediaBox(url, "video")));
            };
            video.addEventListener('error', fail, { once: true });
        });
    }

    function postNode() {
        return document.querySelector('shreddit-post, .thing.link:not(.comment), .sitetable > .link, [data-testid="post-container"], article[aria-label], article') || null;
    }
    function postDeletedParts() {
        const p = postNode();
        if (!p) return {
            any: false
        };
        const txt = (p.innerText || p.textContent || "").slice(0, 5e3);
        const authorEls = [...p.querySelectorAll('a.author, span.author, em.author, .tagline .author, .tagline [href^="/user/"], .tagline [href^="/u/"], a[href^="/user/"], a[href^="/u/"], [slot="authorName"], shreddit-post-author')];
        const titleEls = [...p.querySelectorAll('a.title, h1, [slot="title"], [data-testid="post-title"]')];
        const bodyEls = [...p.querySelectorAll('.expando .usertext-body .md, .usertext-body .md, [slot="text-body"], [data-testid="post-content"], .md')];
        let author = authorEls.filter(e => !e.hasAttribute?.("data-ru-hidden-deleted-author")).some(e => isDeletedAuthor(e.textContent) || /\/user\/\[deleted\]/i.test(e.getAttribute("href") || "")) || /Posted by\s+u\/\[deleted\]/i.test(txt) || /by\s+\[deleted\]/i.test(txt);
        if (!author && p?.tagName === 'SHREDDIT-POST' && isDeletedAuthor(p.getAttribute('author'))) author = true;

        const title = titleEls.some(e => looksRemoved(e.textContent));

        let isShredditRemoved = false;
        if (p?.tagName === 'SHREDDIT-POST') {
            const rb = p.getAttribute('removed-by');
            if (rb && rb !== 'null' && rb !== 'false') isShredditRemoved = true;
        }

        let remainingTxt = txt;
        titleEls.forEach(e => {
            const et = (e.innerText || e.textContent || "").trim();
            if (et) remainingTxt = remainingTxt.replace(et, "");
        });
        bodyEls.forEach(e => {
            const et = (e.innerText || e.textContent || "").trim();
            if (et) remainingTxt = remainingTxt.replace(et, "");
        });
        const noticeEls = [...p.querySelectorAll('shreddit-post-notice, faceplate-alert, [slot="post-notice"], .expando .error, .entry .buttons .removed')];
        const hasNotice = noticeEls.some(e => looksRemoved(e.textContent) || /removed|deleted/i.test(e.textContent || "")) ||
            /removed by (?:moderator|reddit|moderators)|sorry, this post (?:was|has been) (?:removed|deleted)/i.test(remainingTxt);
        const body = bodyEls.some(e => looksRemoved(e.textContent)) || hasNotice || isShredditRemoved;
        const oldRedditDeleted = p.classList?.contains("deleted") || p.querySelector('.entry .buttons .removed, .entry .tagline .deleted, .expando .error, .expando .md')?.textContent?.match(/removed|deleted/i);
        const oldRedditMissingExpando = location.hostname === 'old.reddit.com' && p.matches?.('.thing.link') && (p.getAttribute('data-url') || '').includes('/removed_by_reddit/');
        const urlRemoved = oldRedditDeleted || oldRedditMissingExpando || (p.getAttribute("data-url") || "").includes("/removed_by_reddit/") || (p.getAttribute("data-permalink") || "").includes("/removed_by_reddit/");
        const mediaGone = urlRemoved || (body && !hasVisibleMedia(p));
        return {
            any: author || title || body || urlRemoved,
            author: author,
            title: title,
            body: body || urlRemoved,
            media: mediaGone
        };
    }
    function profileHref(author) {
        return `/user/${encodeURIComponent(author)}/`;
    }
    function makeAuthorClickable(el, author) {
        const href = profileHref(author);
        if (el.tagName === "A") {
            if (!el.hasAttribute("data-ru-author-modified")) {
                el.setAttribute("data-ru-orig-text", el.textContent || "[deleted]");
                el.setAttribute("data-ru-orig-href", el.getAttribute("href") || "");
            }
            el.textContent = author;
            el.setAttribute("href", href);
            el.setAttribute("data-ru-author-modified", "true");
            el.classList.add("ru-enhanced-author");
            return;
        }
        const a = document.createElement("a");
        a.href = href;
        a.textContent = author;
        a.className = "ru-enhanced-author";
        a.setAttribute("data-ru-author-link", author);
        el.insertAdjacentElement("beforebegin", a);
        el.setAttribute("data-ru-hidden-deleted-author", "true");
        el.style.display = "none";
    }
    function replaceAuthor(root, author) {
        if (!author || isDeletedAuthor(author)) return 0;
        let n = 0;
        const authorSel = 'a.author, a[href^="/user/"], a[href^="/u/"], [slot="authorName"], shreddit-post-author, shreddit-comment-author';
        const nodes = root.matches?.(COMMENT_ROOT_SEL) ? directQuery(root, authorSel) : [...root.querySelectorAll(authorSel)];
        nodes.forEach(el => {
            if (el.closest?.("[data-ru-author-link]") || el.hasAttribute?.("data-ru-hidden-deleted-author") || el.previousElementSibling?.hasAttribute?.("data-ru-author-link")) return;
            if (isDeletedAuthor(el.textContent) || /\/user\/\[deleted\]/i.test(el.getAttribute?.("href") || "")) {
                makeAuthorClickable(el, author);
                n++;
            }
        });
        return n;
    }
    function compactText(x) {
        return String(x || "").replace(/\s+/g, " ").trim().toLowerCase();
    }
    function replaceOldRedditPostAuthor(root, author) {
        if (!author || isDeletedAuthor(author) || !isOldReddit()) return 0;
        if (root.querySelector('[data-ru-old-author-replaced]')) return 0;
        const entry = root.querySelector?.(':scope > .entry') || root.querySelector?.('.entry') || root;
        const tagline = entry.querySelector?.(':scope > .tagline, :scope > p.tagline, .tagline');
        if (!tagline || !/\[deleted\]/i.test(tagline.textContent || "")) return 0;
        const walker = document.createTreeWalker(tagline, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while ((node = walker.nextNode())) {
            if (/\[deleted\]/i.test(node.nodeValue || "")) {
                const parts = node.nodeValue.split(/\[deleted\]/i);
                const frag = document.createDocumentFragment();
                parts.forEach((part, i) => {
                    if (i > 0) {
                        const a = document.createElement('a');
                        a.className = 'ru-enhanced-author';
                        a.setAttribute('data-ru-author-link', author);
                        a.href = profileHref(author);
                        a.textContent = author;
                        frag.appendChild(a);
                    }
                    if (part) frag.appendChild(document.createTextNode(part));
                });
                node.parentNode.replaceChild(frag, node);
                root.setAttribute('data-ru-old-author-replaced', 'true');
                return 1;
            }
        }
        return 0;
    }

    function archivedBodyAlreadyVisible(root, p) {
        const archived = compactText(p?.selftext || "");
        if (!archived) return true;
        const page = compactText(root.innerText || root.textContent || "");
        return page.includes(archived.slice(0, Math.min(80, archived.length)));
    }
    function hasVisiblePostBody(root) {
        const bodyNodes = [...root.querySelectorAll('.expando .usertext-body .md, .entry > .usertext .usertext-body .md, .entry > form.usertext .usertext-body .md, [slot="text-body"], [data-testid="post-content"], [id*="post-rtjson-content"]')];
        return bodyNodes.some(n => {
            const t = compactText(n.innerText || n.textContent || "");
            return t && !looksRemoved(t) && t.length > 12;
        });
    }
    function hasVisibleMedia(root) {
        if (isOldReddit()) return !!root.querySelector('.expando img[src*="redd.it"], .expando img[src*="redditmedia"], .expando video, .expando iframe, .expando object, .expando embed');
        return !!root.querySelector('[slot="media"] img, [slot="media"] video, [data-testid*="media"] img, [data-testid*="media"] video, shreddit-player, gallery-carousel, video');
    }
    function archiveSaysPostRemoved(p) {
        const m = p?._meta || {};
        return !!(p?.removed_by_category || m.removal_type || m.was_deleted_later || m.was_initially_deleted || m.was_initially_removed);
    }

    function restorePost(p, parts) {
        const root = postNode();
        if (!root) return {
            postText: 0,
            postMedia: 0,
            authors: 0
        };
        let postText = 0, postMedia = 0, authors = 0;
        authors += replaceAuthor(root, p.author);
        if (!authors) authors += replaceOldRedditPostAuthor(root, p.author);
        if (p.title) {
            const titles = [...root.querySelectorAll('a.title, h1, [slot="title"], [data-testid="post-title"]')];
            titles.forEach(t => {
                if (looksRemoved(t.textContent)) {
                    if (!t.hasAttribute("data-ru-title-modified")) t.setAttribute("data-ru-orig-text", t.textContent || "[removed]");
                    t.textContent = p.title;
                    t.setAttribute("data-ru-title-modified", "true");
                    postText++;
                }
            });
        }
        const body = htmlFrom(p, "selftext");
        const mh = mediaHTML(p);
        if (!mh) root.querySelectorAll('[data-ru-kind="media"]').forEach(n => n.remove());
        const isPostRemoved = parts.body || parts.title || parts.author || archiveSaysPostRemoved(p);
        const shouldRestoreBody = body && !root.querySelector('[data-ru-kind="selftext"]') && (isPostRemoved || !hasVisiblePostBody(root)) && !archivedBodyAlreadyVisible(root, p);
        if (shouldRestoreBody) {
            const marker = [...root.querySelectorAll('.expando .usertext-body .md, .usertext-body .md, [slot="text-body"], [data-testid="post-content"], [id*="post-rtjson-content"], .md, p, div, shreddit-post-notice, faceplate-alert, [slot="post-notice"]')].find(e => looksRemoved(e.textContent));
            let targetSlot = "text-body";
            const titleSlotEl = !isOldReddit() && root.tagName === 'SHREDDIT-POST' ? root.querySelector('[slot="title"]') : null;
            if (!isOldReddit() && marker && marker.hasAttribute("slot")) {
                targetSlot = marker.getAttribute("slot");
            }
            const html = `<div class="ru-enhanced-selftext" data-ru-kind="selftext" ${!isOldReddit() && !titleSlotEl ? `slot="${targetSlot}"` : ""}><div class="ru-enhanced-meta">↺ restored deleted/missing post text</div>${body}</div>`;
            const target = postContentTarget(root);
            const existingMedia = root.querySelector('[data-ru-kind="media"]');

            if (existingMedia) {
                existingMedia.insertAdjacentHTML("beforebegin", html);
            } else if (titleSlotEl) {
                titleSlotEl.insertAdjacentHTML("beforeend", html);
            } else if (!isOldReddit() && root.tagName === 'SHREDDIT-POST') {
                target.insertAdjacentHTML("beforeend", html);
            } else if (marker) {
                marker.insertAdjacentHTML("afterend", html);
            } else {
                target.insertAdjacentHTML("afterbegin", html);
            }
            postText++;
        }
        const shouldRestoreMedia = mh && !root.querySelector('[data-ru-kind="media"]') && (isPostRemoved || !hasVisibleMedia(root));
        if (shouldRestoreMedia) {
            const marker = [...root.querySelectorAll('.expando .usertext-body .md, .usertext-body .md, [slot="text-body"], [data-testid="post-content"], [id*="post-rtjson-content"], .md, p, div, shreddit-post-notice, faceplate-alert, [slot="post-notice"]')].find(e => looksRemoved(e.textContent));
            let targetSlot = "text-body";
            const titleSlotEl = !isOldReddit() && root.tagName === 'SHREDDIT-POST' ? root.querySelector('[slot="title"]') : null;
            if (!isOldReddit() && marker && marker.hasAttribute("slot")) {
                targetSlot = marker.getAttribute("slot");
            }
            const htmlWithSlot = mh.replace('slot="text-body"', !isOldReddit() && titleSlotEl ? "" : `slot="${targetSlot}"`);
            const target = postContentTarget(root);
            const restoredText = root.querySelector('[data-ru-kind="selftext"]');

            if (restoredText) {
                restoredText.insertAdjacentHTML("afterend", htmlWithSlot);
            } else if (titleSlotEl) {
                titleSlotEl.insertAdjacentHTML("beforeend", htmlWithSlot);
            } else if (!isOldReddit() && root.tagName === 'SHREDDIT-POST') {
                target.insertAdjacentHTML("beforeend", htmlWithSlot);
            } else if (marker) {
                marker.insertAdjacentHTML("afterend", htmlWithSlot);
            } else {
                target.insertAdjacentHTML("beforeend", htmlWithSlot);
            }

            resolveRedgifsVideos(target);
            attachMediaFailureHandlers(target);
            postMedia++;
        }
        return {
            postText: postText,
            postMedia: postMedia,
            authors: authors
        };
    }
    const COMMENT_ROOT_SEL = 'shreddit-comment, .comment[id], .comment[data-fullname], .thing.comment, [thingid*="t1_"], [data-testid="comment"], .ru-enhanced-injected-comment';
    const COMMENT_BODY_SEL = '.usertext-body, .usertext-body .md, [slot="comment"], [id$="-comment-rtjson-content"], [data-testid="comment-content"], [data-testid="comment"] .md';
    const COMMENT_AUTHOR_SEL = 'a.author, span.author, .tagline .author, a[href^="/user/"], a[href^="/u/"], [slot="authorName"], shreddit-comment-author';
    function isOldReddit() {
        return location.hostname === "old.reddit.com" || !!document.querySelector("body.listing-page, .commentarea .nestedlisting, .sitetable.nestedlisting");
    }
    function oldThingId(el) {
        const node = el?.matches?.('.thing.comment[id^="thing_t1_"], .comment[id^="thing_t1_"]') ? el : null;
        const id = node?.id || '';
        const m = id.match(/^thing_t1_([a-z0-9]{5,15})$/i);
        if (m) return m[1];
        const classM = (el?.className || '').match(/id-t1_([a-z0-9]{5,15})/i);
        return classM ? classM[1] : null;
    }
    function oldDomParentCommentId(el) {
        const parent = el?.parentElement?.closest?.('.thing.comment[id^="thing_t1_"], .comment[id^="thing_t1_"]');
        return parent ? oldThingId(parent) : null;
    }
    function archiveMatchesOldCommentPosition(el, c, id) {
        if (!isOldReddit()) return true;
        const archiveId = normId(c?.id || c?.name || "");
        return !archiveId || archiveId === normId(id);
    }

    function oldEntryRoot(el) {
        return el?.querySelector?.(':scope > .entry') || el?.querySelector?.('.entry') || el;
    }
    function oldDirectBodies(el) {
        return [...el.querySelectorAll('.usertext-body .md, .md')].filter(n => isSameCommentScope(el, n));
    }
    function oldDirectAuthors(el) {
        return [...el.querySelectorAll('.tagline a.author, .tagline span.author, .author')].filter(n => isSameCommentScope(el, n));
    }

    function closestCommentRoot(node) {
        if (!node?.closest && !node?.matches) return null;
        return node.matches?.(COMMENT_ROOT_SEL) ? node : node.closest?.(COMMENT_ROOT_SEL);
    }
    function isSameCommentScope(root, node) {
        const c = closestCommentRoot(node);
        return c === root || !c && root.contains(node);
    }
    function directQuery(root, selector) {
        if (isOldReddit() && root.matches?.('.thing.comment, .comment')) {
            if (selector === COMMENT_BODY_SEL || selector.includes('usertext-body') || selector.includes('[slot="comment"]')) return oldDirectBodies(root);
            if (selector === COMMENT_AUTHOR_SEL || selector.includes('a.author') || selector.includes('span.author')) return oldDirectAuthors(root);
        }
        return [...root.querySelectorAll(selector)].filter(n => isSameCommentScope(root, n));
    }
    function commentOwnText(root) {
        if (isOldReddit() && root.matches?.('.thing.comment, .comment')) {
            const entry = oldEntryRoot(root);
            const clone = entry.cloneNode(true);
            clone.querySelectorAll("[data-ru-kind], [data-ru-comment], [data-ru-author-link]").forEach(n => n.remove());
            return (clone.innerText || clone.textContent || "").slice(0, 2500);
        }
        const clone = root.cloneNode(true);
        clone.querySelectorAll(COMMENT_ROOT_SEL).forEach(n => {
            if (n !== clone) n.remove();
        });
        clone.querySelectorAll("[data-ru-kind], [data-ru-comment], [data-ru-author-link]").forEach(n => n.remove());
        return (clone.innerText || clone.textContent || "").slice(0, 2500);
    }
    function oldDirectChildCommentIds(el) {
        if (!isOldReddit()) return [];
        const child = el.querySelector?.(':scope > .child');
        if (!child) return [];
        return [...child.querySelectorAll('.thing.comment[id^="thing_t1_"], .comment[id^="thing_t1_"]')]
            .filter(n => n.parentElement?.closest?.('.thing.comment[id^="thing_t1_"], .comment[id^="thing_t1_"]') === el || n.closest('.child') === child)
            .map(n => oldThingId(n)).filter(Boolean);
    }
    function oldVisibleCommentIds() {
        return new Set([...document.querySelectorAll('.thing.comment[id^="thing_t1_"], .comment[id^="thing_t1_"]')].map(n => oldThingId(n)).filter(Boolean));
    }
    function oldNoIdDeletedNodes() {
        if (!isOldReddit()) return [];
        return [...document.querySelectorAll('.thing.comment, .comment')].filter(el => !oldThingId(el) && commentParts(el).body);
    }
    function inferOldNoIdArchive(el, maps) {
        const visible = oldVisibleCommentIds();
        for (const childId of oldDirectChildCommentIds(el)) {
            const child = maps.byId.get(normId(childId));
            const parentId = normId(child?.parent_id || "");
            if (parentId && !visible.has(parentId) && maps.byId.has(parentId)) return maps.byId.get(parentId);
        }
        const domParent = oldDomParentCommentId(el);
        if (domParent) {
            const missing = (maps.children.get(normId(domParent)) || []).filter(c => {
                const id = normId(c.id || c.name);
                return id && !visible.has(id) && !document.querySelector(`[data-ru-comment="${id}"]`) && c.body && !looksRemoved(c.body);
            });
            if (missing.length === 1) return missing[0];
        }
        return null;
    }
    async function processOldNoIdComments() {
        if (!isOldReddit()) return { commentAuthors: 0, commentBodies: 0, looked: 0 };
        const nodes = oldNoIdDeletedNodes().filter(el => !el.querySelector('[data-ru-comment]'));
        if (!nodes.length) return { commentAuthors: 0, commentBodies: 0, looked: 0 };
        const arr = state.threadComments || await fetchThreadComments(currentPostId());
        state.threadComments = arr;
        const maps = threadMap(arr);
        let commentAuthors = 0, commentBodies = 0, looked = 0;
        nodes.forEach(el => {
            const c = inferOldNoIdArchive(el, maps);
            if (!c) return;
            const id = normId(c.id || c.name);
            if (!id || el.querySelector(`[data-ru-comment="${id}"]`)) return;
            const r = restoreComment(el, c, { any: true, author: true, body: true });
            commentAuthors += r.authors; commentBodies += r.bodies; looked++;
        });
        return { commentAuthors, commentBodies, looked };
    }

    async function processMissingComments() {
        const pid = currentPostId();
        if (!pid) return 0;
        const arr = state.threadComments || await fetchThreadComments(pid);
        state.threadComments = arr;
        if (!arr || !arr.length) return 0;

        let injected = 0;
        const sorted = [...arr].sort((a, b) => (a.created_utc || 0) - (b.created_utc || 0));

        for (const c of sorted) {
            const id = normId(c.id || c.name);
            if (!id || looksRemoved(c.body)) continue;

            const exists = !!document.querySelector(`[thingid*="t1_${id}"], [data-fullname*="t1_${id}"], [id*="t1_${id}"], [data-ru-comment="${id}"]`);
            if (exists) continue;

            const parentId = normId(c.parent_id);
            const isTopLevel = parentId === pid || !parentId || (c.parent_id || '').startsWith('t3_');
            let container = null;

            if (isOldReddit()) {
                if (isTopLevel) {
                    const emptyNodes = [...document.querySelectorAll('.commentarea > .sitetable > .thing.comment')].filter(n => !oldThingId(n) && !n.querySelector('[data-ru-comment]') && commentParts(n).body);
                    if (emptyNodes.length > 0) {
                        const el = emptyNodes[0];
                        el.id = `thing_t1_${id}`;
                        el.setAttribute('data-fullname', `t1_${id}`);
                        const r = restoreComment(el, c, { any: true, author: true, body: true });
                        if (r.bodies) injected++;
                        continue;
                    }
                    container = document.querySelector('.commentarea > .sitetable.nestedlisting');
                } else {
                    const parentEl = document.querySelector(`.thing.comment[id*="t1_${parentId}"], [data-ru-comment="${parentId}"]`)?.closest('.thing.comment, .ru-enhanced-injected-comment');
                    if (parentEl) {
                        const emptyNodes = [...parentEl.querySelectorAll(':scope > .child > .sitetable > .thing.comment')].filter(n => !oldThingId(n) && !n.querySelector('[data-ru-comment]') && commentParts(n).body);
                        if (emptyNodes.length > 0) {
                            const el = emptyNodes[0];
                            el.id = `thing_t1_${id}`;
                            el.setAttribute('data-fullname', `t1_${id}`);
                            const r = restoreComment(el, c, { any: true, author: true, body: true });
                            if (r.bodies) injected++;
                            continue;
                        }

                        let childDiv = parentEl.querySelector(':scope > .child');
                        if (!childDiv) {
                            childDiv = document.createElement('div');
                            childDiv.className = 'child';
                            const entry = parentEl.querySelector('.entry') || parentEl;
                            if (entry.nextSibling) {
                                parentEl.insertBefore(childDiv, entry.nextSibling);
                            } else {
                                parentEl.appendChild(childDiv);
                            }
                        }
                        container = childDiv.querySelector(':scope > .sitetable');
                        if (!container) {
                            container = document.createElement('div');
                            container.className = 'sitetable listing';
                            childDiv.appendChild(container);
                        }
                    }
                }

                if (container) {
                    const el = document.createElement('div');
                    el.className = `thing comment noncollapsed ru-enhanced-injected-comment`;
                    el.id = `thing_t1_${id}`;
                    el.setAttribute('data-fullname', `t1_${id}`);

                    const entry = document.createElement('div');
                    entry.className = 'entry unvoted';
                    const tagline = document.createElement('p');
                    tagline.className = 'tagline';
                    tagline.innerHTML = `<a href="javascript:void(0)" class="expand" onclick="return togglecomment(this)">[–]</a>`;
                    entry.appendChild(tagline);

                    el.appendChild(entry);
                    container.appendChild(el);

                    const r = restoreComment(el, c, { any: true, author: true, body: true });
                    if (r.bodies) injected++;
                }
            } else {
                let parentEl = null;
                if (isTopLevel) {
                    container = document.querySelector('#comment-tree, shreddit-comment-tree, .CommentTree, [data-testid="comment-tree"]');
                } else {
                    parentEl = document.querySelector(`shreddit-comment[thingid*="${parentId}"], shreddit-comment[id*="${parentId}"], shreddit-comment[data-fullname*="${parentId}"], .Comment[data-testid*="${parentId}"], [data-ru-comment="${parentId}"]`)?.closest('shreddit-comment, .Comment, .ru-enhanced-injected-comment');
                    if (parentEl) {
                        container = parentEl.querySelector(':scope > [slot="children"]') || parentEl.querySelector(':scope > ul') || parentEl.querySelector('#comment-tree');
                        if (!container && parentEl.tagName === 'SHREDDIT-COMMENT') {
                            container = document.createElement('div');
                            container.setAttribute('slot', 'children');
                            parentEl.appendChild(container);
                        } else if (!container) {
                            container = parentEl;
                        }
                    }
                }

                if (container) {
                    const el = document.createElement('div');
                    el.setAttribute('data-fullname', `t1_${id}`);
                    el.className = 'ru-enhanced-injected-comment';
                    if (!isTopLevel) {
                        el.className += ' ru-child-comment';
                    }
                    container.appendChild(el);

                    const r = restoreComment(el, c, { any: true, author: true, body: true });
                    if (r.bodies) injected++;
                }
            }
        }
        return injected;
    }

    function commentNodes() {
        const roots = [];
        document.querySelectorAll(COMMENT_ROOT_SEL).forEach(n => {
            const r = closestCommentRoot(n);
            if (r && commentId(r) && !roots.includes(r)) roots.push(r);
        });
        return roots;
    }
    function commentId(el) {
        const oldId = oldThingId(el);
        if (oldId) return oldId;
        if (isOldReddit() && el.matches?.('.thing.comment, .comment')) return null;
        for (const a of ["thingid", "data-fullname", "fullname", "id", "data-id", "data-name"]) {
            const v = String(el.getAttribute?.(a) || "");
            let m = v.match(/(?:thing_)?t1_([a-z0-9]{5,15})/i);
            if (m) return m[1];
            if ((a === "thingid" || a === "data-id") && /^([a-z0-9]{5,15})$/i.test(v)) return v;
        }
        const inner = el.querySelector?.('[thingid*="t1_"],[data-fullname*="t1_"],[id*="t1_"]');
        return inner && inner !== el ? commentId(inner) : null;
    }
    function commentParts(el) {
        const ownText = commentOwnText(el);
        const bodyEls = directQuery(el, COMMENT_BODY_SEL);
        const bodyText = bodyEls.length ? bodyEls.map(n => n.innerText || n.textContent || "").join("\n") : ownText;
        const author = directQuery(el, COMMENT_AUTHOR_SEL).filter(a => !a.hasAttribute?.("data-ru-hidden-deleted-author")).some(a => isDeletedAuthor(a.textContent) || /\/user\/\[deleted\]/i.test(a.getAttribute?.("href") || "")) || /u\/\[deleted\]/i.test(ownText);
        const oldRedditDeleted = !!(isOldReddit() && (el.classList?.contains('deleted') || (!bodyEls.length && /\[(?:deleted|removed)\]/i.test(ownText))));
        const body = looksRemoved(bodyText) || /^\s*(?:comment (?:deleted|removed)|removed by moderator|removed by reddit)\s*$/im.test(bodyText) || oldRedditDeleted;
        return {
            any: author || body,
            author: author,
            body: body
        };
    }
    function commentInsertTarget(el) {
        if (isOldReddit() && el.matches?.('.thing.comment, .comment')) return oldEntryRoot(el);
        return directQuery(el, '.usertext-body, [slot="comment"], [id$="-comment-rtjson-content"], [data-testid="comment-content"]').find(Boolean) || el;
    }
    function commentPermalink(c, id) {
        if (c?.permalink) return `https://www.reddit.com${c.permalink}`;
        const pid = currentPostId();
        return pid ? `https://www.reddit.com/comments/${pid}/_/${id}/` : `https://www.reddit.com/comment/${id}/`;
    }
    function restoredCommentHeader(c, id, authorsChanged) {
        const author = c?.author && !isDeletedAuthor(c.author) ? c.author : "";
        const authorHTML = author ? `<a class="ru-enhanced-author" href="/user/${encodeURIComponent(author)}/" target="_self">u/${esc(author)}</a>` : "unknown author";
        const link = esc(commentPermalink(c, id));
        return `<div class="ru-enhanced-meta">↺ restored deleted comment · ${authorHTML} · <a href="${link}" target="_blank" rel="noopener noreferrer">t1_${esc(id)}</a></div>`;
    }
    function restoreComment(el, c, parts) {
        const id = normId(c.id || c.name || commentId(el));
        if (!archiveMatchesOldCommentPosition(el, c, id)) return {
            authors: 0,
            bodies: 0
        };
        let authors = 0, bodies = 0;
        if (parts.author) authors += replaceAuthor(el, c.author);
        if (parts.body && !el.querySelector(`[data-ru-comment="${id}"]`)) {
            const body = htmlFrom(c, "body");
            if (body) {
                el.setAttribute?.("data-ru-restored-comment-id", id);
                const marker = directQuery(el, '.usertext-body .md, [slot="comment"], [id$="-comment-rtjson-content"], .md').find(e => looksRemoved(e.textContent));
                const target = marker ? null : commentInsertTarget(el);
                const slotAttr = !isOldReddit() && el.tagName === 'SHREDDIT-COMMENT' && target === el ? 'slot="comment"' : '';
                const html = `<div class="ru-enhanced-comment-body" data-ru-comment="${esc(id)}" ${slotAttr}>${restoredCommentHeader(c, id, authors > 0)}${body}</div>`;
                if (marker) marker.insertAdjacentHTML("beforeend", html); else {
                    target.insertAdjacentHTML("beforeend", html);
                }
                attachMediaFailureHandlers(el);
                bodies++;
            }
        }
        if (bodies) state.doneComments.add(id);
        return {
            authors: authors,
            bodies: bodies
        };
    }
    async function processComments() {
        const candidates = commentNodes().map(el => ({
            el: el,
            id: commentId(el),
            parts: commentParts(el)
        })).filter(x => x.id && x.parts.any && (!state.doneComments.has(x.id) || !restoredCommentPresent(x.el, x.id)));
        if (!candidates.length) return await processOldNoIdComments();
        const map = await fetchCommentsByIds(candidates.map(x => x.id));
        let commentAuthors = 0, commentBodies = 0;
        candidates.forEach(x => {
            const c = map.get(normId(x.id));
            if (!c) return;
            const r = restoreComment(x.el, c, x.parts);
            commentAuthors += r.authors;
            commentBodies += r.bodies;
        });
        const extra = await processOldNoIdComments();
        commentAuthors += extra.commentAuthors;
        commentBodies += extra.commentBodies;
        return {
            commentAuthors: commentAuthors,
            commentBodies: commentBodies,
            looked: candidates.length + extra.looked
        };
    }
    async function run(force = false) {
        const pid = currentPostId();
        if (!pid || state.running) return;
        if (force) {
            state.threadComments = null;
            try {
                localStorage.removeItem(cacheKey("thread", pid));
            } catch (_e) { }
        }
        const parts = postDeletedParts();
        const cands = commentNodes().map(el => ({
            el: el,
            id: commentId(el),
            parts: commentParts(el)
        })).filter(x => x.id && x.parts.any && (!state.doneComments.has(x.id) || !restoredCommentPresent(x.el, x.id)));
        const previousTotal = state.lastStats ? state.lastStats.postText + state.lastStats.postMedia + state.lastStats.authors + state.lastStats.commentAuthors + state.lastStats.commentBodies : 0;
        const oldNoIdMayNeedCheck = isOldReddit() && oldNoIdDeletedNodes().length > 0;
        if (!force && !parts.any && !cands.length && !oldNoIdMayNeedCheck) {
            if (previousTotal) status("✓", `Visible scan: previously restored ${previousTotal} item(s). Expand/scroll for more; Shift-click rescans.`); else status("·", "Idle: no deleted post/comment text or author detected. Click to rescan.");
            return;
        }
        state.running = true;
        disconnectObserver();
        ensureStyle();
        status("…", `In progress: checking archives for ${parts.any ? "post" : ""}${parts.any && cands.length ? " and " : ""}${cands.length ? cands.length + " comment(s)" : ""}.`);
        const stats = {
            postText: 0,
            postMedia: 0,
            authors: 0,
            commentAuthors: 0,
            commentBodies: 0,
            failures: []
        };
        try {
            try {
                if (parts.any) {
                    const post = await fetchPost(pid);
                    if (post) Object.assign(stats, {
                        ...stats,
                        ...restorePost(post, parts)
                    }); else if (parts.any) stats.failures.push("post not found in archives");
                }
            } catch (e) {
                stats.failures.push(`post lookup failed: ${e.message || e}`);
            }
            try {
                const cr = await processComments();
                stats.commentAuthors = cr.commentAuthors;
                stats.commentBodies = cr.commentBodies;

                const missingCount = await processMissingComments();
                stats.commentBodies += missingCount;
            } catch (e) {
                stats.failures.push(`comment lookup failed: ${e.message || e}`);
            }
            updateCommentsCollapseStates();
            const total = stats.postText + stats.postMedia + stats.authors + stats.commentAuthors + stats.commentBodies;
            if (total || !previousTotal) state.lastStats = stats;
            if (stats.failures.length && total) status("!", `Partial: restored ${total}; ${stats.failures.join("; ")}. Click toggles original/restored; Shift-click rescans.`); else if (stats.failures.length) status("×", `Failed: ${stats.failures.join("; ")}. Click rescans.`); else if (total) status("✓", `Visible scan: restored ${stats.postText} post text, ${stats.postMedia} media, ${stats.authors + stats.commentAuthors} username(s), ${stats.commentBodies} comment body/bodies. Expand/scroll for more; Shift-click rescans.`); else if (previousTotal) status("✓", `Visible scan: already restored ${previousTotal} item(s). Expand/scroll for more; Shift-click rescans.`); else status("Ø", "Done: deleted-looking content was detected, but no matching archived replacement was found or DOM replacement was not possible. Shift-click rescans.");
        } finally {
            state.running = false;
            reconnectObserver();
        }
    }
    function disconnectObserver() {
        if (state.observer) state.observer.disconnect();
    }
    function reconnectObserver() {
        if (state.observer) {
            state.observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        }
    }
    function updateCommentsCollapseStates() {
        if (isOldReddit()) return;
        document.querySelectorAll('shreddit-comment').forEach(comment => {
            const details = comment.shadowRoot?.querySelector('details');
            if (details) {
                if (!details.open) {
                    comment.setAttribute('data-ru-collapsed', 'true');
                } else {
                    comment.removeAttribute('data-ru-collapsed');
                }
            }
        });
    }
    function watch() {
        let t;
        state.observer = new MutationObserver(() => {
            clearTimeout(t);
            t = setTimeout(() => {
                const pid = currentPostId();
                if (pid !== state.postId) {
                    state.postId = pid;
                    state.doneComments.clear();
                    state.observerPasses = 0;
                }
                state.observerPasses++;
                run(false).catch(e => {
                    state.running = false;
                    status("×", `Failed: ${e.message || e}`);
                });
            }, 1500);
        });
        state.observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
        window.addEventListener("popstate", () => setTimeout(() => {
            state.postId = null;
            run(true);
        }, 700));
    }
    if (/\/comments\/[a-z0-9]+/i.test(location.pathname)) {
        ensureStyle();
        status("…", "Starting: waiting for Reddit content.");
        state.postId = currentPostId();
        setTimeout(() => run(false), 700);
        setTimeout(() => run(false), 2200);
        watch();
        window.addEventListener('click', () => {
            setTimeout(updateCommentsCollapseStates, 100);
        });
    }
})();
