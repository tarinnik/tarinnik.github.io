const cacheName = "portfolio-v1.0.0";
const appShellFiles = [
    "/portfolio/",
    "/portfolio/index.html",
    "/portfolio/js/main.js",
    "/portfolio/css/style.css",
    "/portfolio/favicon.ico",
    "/portfolio/icons/icon-32.png",
    "/portfolio/icons/icon-64.png",
    "/portfolio/icons/icon-96.png",
    "/portfolio/icons/icon-128.png",
    "/portfolio/icons/icon-168.png",
    "/portfolio/icons/icon-192.png",
    "/portfolio/icons/icon-256.png",
    "/portfolio/icons/icon-512.png",
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installing');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log("[Service Worker] Caching all: app shell");
        await cache.addAll(appShellFiles);
    })());
});

self.addEventListener("fetch", (e) => {
    e.respondWith((async () => {
        const r = await cache.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) return r;
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource" ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key === cacheName) return;
            return caches.delete(key);
        }))
    }));
});