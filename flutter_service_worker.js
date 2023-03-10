'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d6218d5bde32f907bc8ca5224d50f402",
".git/config": "ba1cd3bbfb7934326d731ea8ff0e1d5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6f489713f6dddf97d5ab25457856c461",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2af18f4740d40573f0bcd42a8ce2fa8c",
".git/logs/refs/heads/main": "3ff6b4ff9cef876f7a06bf242f11acb8",
".git/logs/refs/remotes/origin/main": "fc2ee0b63af2e2ce0fe7e33a7e52901b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/5253bfc7c4981fb373b2e81201124a0f081075": "90ef01b7598ef9d3f743e5e1983a5f63",
".git/objects/05/d1bbe4468294611dba87216bfc0898b3251d8a": "8e7500df97eec696ea1633916bcab532",
".git/objects/07/22ce73dabcfb97409ef389e94bdd92ed29b7a9": "99471ae133ab58d9ce8bd2dc98a390ff",
".git/objects/07/b98486c0f0576eade7205c4b014a6a4b736125": "98ac4f74ae3412f13974de3cd76ed9c0",
".git/objects/09/bbdce3f9ff6f2084171af98f075fc32722c1ae": "f27aecdd32417ce87958e32fc157f0a0",
".git/objects/0b/789e3b99646d893b044f5662914c5a7466043d": "b59ad9f146725751f1bda88944cc3bf3",
".git/objects/11/c70ad8fb925e9c2a90c4c0b17f6381cf0b7646": "be15d1ae5a0c1bea12910c4593390ffa",
".git/objects/12/7d8c1da9181ac419a218bb18fa1af9d867a3aa": "da40b38aec14048576f6fe55ed95c5b6",
".git/objects/13/6063149c49edf9ccc92f2480c72dbcaf631363": "f4563905a67fce303b44ca7a1be51528",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/c99f714051daf3dd28ae34d618904c097e8bac": "62a9a9e8c50e9b49456fdb1feecfd832",
".git/objects/21/e0d5db97326ca098b3f32d4d48f1d8b5787f9c": "4944b779c05e8b1a6d25e75b7ad62175",
".git/objects/23/d8ecb704514edaae542e131be0578951d0118c": "6c346faac8f7ed43059c2ee8e2357a7c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/9a23eaf251274f69df481ef67ab8ddf4d8b362": "aa037688991847cbeb22e3f594d6faa5",
".git/objects/3e/618fc1262462127dbe0928122c157bfc3c097c": "67ee1e2ec7d4545eee50cd992abfb1dc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/1ea807074a5103d737ead7bbcf143fc4bc69cf": "4d5af82040a9dabf7995e0ff1bd340d2",
".git/objects/44/576d2c81c88ba42503a0c35bfa56e8bd4e30d6": "b58e4f91c6d239f9a9ac296f185a402d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/65/e4a7f39b5bc474df290086bae604d726e54ff0": "ab23f6d0e2dce9da1b6518a6f9bcdd6c",
".git/objects/72/558eeea5731a8c1a119fbbe566404e18528126": "977c7512b02cdb690b011d9f312b3e2e",
".git/objects/74/02c668f6feeb5430cc7dc429ad1a333af37dfb": "bce10e574d31eee6d5e7f40bc94d42dc",
".git/objects/75/da05e3290e19815e1d1da8d9716dfa055ec733": "3a61ebb5a4190f3954fc037f23aea846",
".git/objects/78/36fc15d87b64ab89d842ec028bf3bc65981878": "59cfe33f29bedbcaeaeb5c970f32e72c",
".git/objects/78/c114521d545925d92050e3d7e61cd0c0df76e6": "c1d5d58cc6a33b97f2699abdb9e792d5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/84/bd97e72bf5f01515928a2bf58c50bcefe6490f": "e81377e0592ebbec1590eae637652b37",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2adf1e24bbd79e4e54e2c5642ee44b366f41e5": "935cd513c11460c92d5cb5bdb5725bb9",
".git/objects/8a/7fec575a0e412ddc418a4797fc9e5d32e834d7": "769fc7e510fc2d1a8773a96400032b4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/9b622a0eb1b86d11abab968253c15488dc951c": "81ab9e6a4da5d0d02ed19dda3281966f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/5d3ce375774749a04714db2d38246b5f8b3cdb": "1af327f584a2daf11eb42775bcbd1166",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/58a2fb2cd1b8806ac266a3adc63d0e69bd916d": "232b18cfa6f590fe72f53d8e3e8755a5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/7907c60e33cfeca55eca1224ccccf8b809fc5c": "784375dd7f064e3af609aa3bd82c96b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/86b2992c953a839c1c0a176cbf209e0dd132a1": "9b2f355c165089d7ef9fe474d09d9fb7",
".git/objects/b9/b40503c9f8287d3704db478b21a0621a27e702": "0bf724801591a715c5d0a6c4cc98aba8",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/422f39bddb31e3cb016af25b931441c8a1bbc2": "37a65d67eef54268f99198a96b132cd7",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a383843ecabb589b01ade10f18624b43d6b62f": "45e5dc523c1c2726caf96048ee87c646",
".git/objects/e8/7ee0d1f7c60499790c5d55c7dc4a00fed5e589": "4d22d0a779ebe34fcf739c86b5f09193",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/68d91abd27f2c27c0a674c5f44fb32bf149578": "b4824eb14c97b2d5d4e1253d05b3ac37",
".git/objects/f8/2a767b7f50b9a1cebae7e6735b93375fd68823": "5aa393d616136e863bfe4be8f435dc72",
".git/objects/fa/3aa6618fac6de3f5044de4f4552d2e6182820c": "a873d0df9b2cf9f66de76d8d53704efc",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/ff/bdc937bd594d5d4edcd900dee2f012cb5cc1e4": "0b99352c6493a6240742e741780d7a07",
".git/refs/heads/main": "976e82735b3a289b81880ee4e99e78df",
".git/refs/remotes/origin/main": "976e82735b3a289b81880ee4e99e78df",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1a966c9a11ae64a55ad3c64b14852356",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a37ae954199fef8823127918ef23b460",
"/": "a37ae954199fef8823127918ef23b460",
"main.dart.js": "2b6d1f7dbabe8252f6b6dbf3a711b4cd",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"README.md": "258d507b450855f208cf24e5eca528f1",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
