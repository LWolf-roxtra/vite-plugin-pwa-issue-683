## How to run: 
- `npm i`
- `npm run dev`

## What happens:
- SW registration fails, because script is not found at `localhost/my/app/dev-sw.js?dev-sw`
- When navigating to that route and adding manually `/my/app/` again, route changes to `localhost/my/app/my/app/de-sw.js?dev-sw`
- SW file is at that route, when changing `serviceWorkerPath` in code `ServiceWorkerHelper.ts l.9` with manually adding `/my/app/`, SW registration succeeds

## Issue:
[vite-plugin-pwa Issue 683](https://github.com/vite-pwa/vite-plugin-pwa/issues/683)
