const scope = self.registration.scope;
const prefix = "folha-de-viagem:" + scope + ":";
const cacheName = prefix + "1";
const paths = ["./", "./index.html", "./es.html", "./en.html", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png"];
const urls = new Set(paths.map(path => new URL(path, scope).href));

self.addEventListener("install", event => {
  const requests = paths.map(path => new Request(new URL(path, scope), {cache: "reload"}));
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(requests)));
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(prefix) && key !== cacheName)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  url.search = "";
  url.hash = "";
  if (!urls.has(url.href)) return;
  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(url.href);
    return cached || fetch(event.request);
  })());
});
