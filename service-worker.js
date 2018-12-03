let cacheName = 'notes-son.v.1.0.0';
let filesToCache = [
    './',
    'index.html',
    'css/styles.css',
    'css/colors.css',
    'js/object.observe.pollyfil.js',
    'js/array.observe.pollyfil.js',
    'js/scripts.js',
    'initial_pwa/firebase-messaging-sw.js'
];

self.addEventListener('install', (e) => {
    console.log('[ServiceWorker] Installer');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', (e) => {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache');
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', (e) => {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
