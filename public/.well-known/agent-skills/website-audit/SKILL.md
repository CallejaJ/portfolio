---
name: website-audit
description: Analyze any website's performance, accessibility, SEO and best practices with the jorgecalleja.dev PageSpeed-powered API, and optionally request a manual expert audit delivered by email within 24 hours.
license: MIT
---

# Website Audit

Public endpoints offered by jorgecalleja.dev (web development studio, Malaga, Spain).

## 1. Automated analysis (instant, free)

Request:

```
POST https://jorgecalleja.dev/api/analizar
Content-Type: application/json

{"url": "https://example.com"}
```

- `url` (string, required): the site to analyze. The `https://` scheme is added if missing.

Response (`200`):

```json
{
  "ok": true,
  "url": "https://example.com/",
  "scores": {
    "performance": 0.99,
    "accessibility": 0.95,
    "bestPractices": 0.96,
    "seo": 1.0
  }
}
```

Scores come from Google PageSpeed Insights (Lighthouse, mobile strategy) and range from 0 to 1.

Error responses: `400` (`url_invalida`), `502` (upstream PageSpeed error).

## 2. Manual expert audit (reply within 24h)

Request:

```
POST https://jorgecalleja.dev/api/audit
Content-Type: application/json

{"website": "https://example.com", "email": "visitor@example.com"}
```

- `website` (string, required): site to review.
- `email` (string, required): where the visitor wants to receive the audit. Must be a syntactically valid email address.

Response (`200`): `{"ok": true}` — the site owner receives the request and replies by email.

Error responses: `400` (invalid payload), `500` (delivery misconfigured), `502` (email provider error).

## Notes

- No authentication is required for either endpoint.
- The automated analysis may take up to ~60 seconds for slow sites.
- Discovery metadata: see `/.well-known/api-catalog` (RFC 9727 linkset) and `/llms.txt`.
