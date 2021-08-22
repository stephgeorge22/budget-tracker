const FILES_TO_CACHE = [
    // "../server.js",
    "./js/index.js",
    "./js/idb.js",
    "./index.html",
    "./css/styles.css"
    // "../models/transaction.js"
];

const APP_PREFIX = 'Budget-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})