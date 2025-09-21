'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4b5e51239dfcd67519d2b107fa071146",
"assets/AssetManifest.bin.json": "f162e6afd8cd0dd944d88569433a918a",
"assets/AssetManifest.json": "709820251a239f590d94622da234edae",
"assets/assets/audio/%25EC%2595%2584%25ED%258A%25B8%25EB%25A5%25B4%25E2%2599%25A5.mp3": "b113ee12a9f75ba63d253ec8fdb3cb88",
"assets/assets/audio/Akhir_Tak_Bahagia.mp3": "7506af221f13af37a37b2f527d868db8",
"assets/assets/audio/Bahaya.mp3": "ad542618543f0dafb49acf1a3bf7dd56",
"assets/assets/audio/BEAUTiFUL.mp3": "1f77c6c57a07186c4d9ad8f54f885877",
"assets/assets/audio/Before_Spring_Ends_(%25E5%259C%25A8%25E6%2598%25A5%25E5%25A4%25A9%25E6%25B6%2588%25E5%25A4%25B1%25E4%25B9%258B%25E5%2589%258D).mp3": "d884d43ba2ebc4d5e5088f6f93d6b4d7",
"assets/assets/audio/beside_you.mp3": "c224fd6d2c9f6833b21a26abea308fc7",
"assets/assets/audio/Bila_Kau_Tak_Disampingku.mp3": "0d2514d4d44cd20096e866824f445fc6",
"assets/assets/audio/Heavenmade.mp3": "902b36e76b0084b377c57223de850153",
"assets/assets/audio/I%25E2%2580%2599d_Like_to_Watch_You_Sleeping.mp3": "c65e9f887dcef26dd69731d15d9c9529",
"assets/assets/audio/I_Like_Her.mp3": "db47c62c5d42bf90bcb80f39838cc7ae",
"assets/assets/audio/Kau_Lagi.mp3": "04ca098c04fa921aca392a78eca900d4",
"assets/assets/audio/Mawar_Jingga.mp3": "8201fc8e7196a93083923557d942897a",
"assets/assets/audio/Oceans_&_Engines.mp3": "cc1b2a1f74c0d84ebf35e0c52812b664",
"assets/assets/audio/Perempuanku.mp3": "970d9a977e93844b9d54bf263c49acb7",
"assets/assets/audio/Pesan_Terakhir.mp3": "1e5fca395fbe5f9b28ce8b1d2540098a",
"assets/assets/audio/Promise.mp3": "3d51bac024a53afa8b0af189d3033540",
"assets/assets/audio/Reality_Club.mp3": "77121705b58b874709c6577f4e0d4a07",
"assets/assets/audio/Sa_Susunod_Na_Lang.mp3": "250d7f08764dc16f5251bb0e7ba9ecf7",
"assets/assets/audio/Semenjak_Ada_Dirimu.mp3": "47c32afa8af31f69207522449438d225",
"assets/assets/audio/She_Is_Love.mp3": "86ae196134965cc8ac68eb3c1afef2c3",
"assets/assets/audio/Sienna.mp3": "d0f622de7b9a4fb20af391570762a9f1",
"assets/assets/audio/Sweet_Boy.mp3": "08d397be69306914ea24a895f090b982",
"assets/assets/audio/Toronto_2014.mp3": "5f7088910dd165bd2d4a4a4901f3054d",
"assets/assets/audio/Transform.mp3": "5edbb838849c95a252e33b80e9722175",
"assets/assets/audio/Understand.mp3": "90a0918611b12ba09661eddef8e512f1",
"assets/assets/birthday/ahaha.jpg": "25358a78882ec7b22707012c491a8851",
"assets/assets/birthday/contoh.mp4": "70825ef9e1f02a38d3d06b9b0e734da5",
"assets/assets/birthday/ucapan_hbd.mp4": "261c6cc8064bcf5c11da1d412c8116cd",
"assets/assets/fonts/Inter-Bold.ttf": "c7b5fabc34e7d60044a1dca4ac845774",
"assets/assets/fonts/Inter-Medium.ttf": "2482ffc2093eef392184cdeeca07913a",
"assets/assets/fonts/Inter-Regular.ttf": "4145168e52304666dee7c976559aa0e4",
"assets/assets/fonts/Inter-SemiBold.ttf": "1a8cc1d7404587f171795d58e0d2e246",
"assets/assets/gallery/yeye1.jpg": "654db5cf96dc5594cfa4f78981531dd0",
"assets/assets/gallery/yeye10.jpg": "5968701e1e53a925986fa732ddd776e3",
"assets/assets/gallery/yeye100.jpg": "580a22c2ccba815d58efc0dbdbb007f8",
"assets/assets/gallery/yeye101.jpg": "93ab7a194851af02d8784ccd0ea30001",
"assets/assets/gallery/yeye102.jpg": "244945582f04c43e6b5ec79c82b111af",
"assets/assets/gallery/yeye103.jpg": "461acf3729b040a9009f8372eddf922b",
"assets/assets/gallery/yeye104.jpg": "ba01cdf2ff2c0e781acbc7d3ba40e8cd",
"assets/assets/gallery/yeye105.jpg": "981bc87e2bb376b142cb6fd2a71f1841",
"assets/assets/gallery/yeye106.jpg": "8022eb536a777d3bc2e8d0726d8231e3",
"assets/assets/gallery/yeye107.jpg": "55c297228acb736d577411bdf728a428",
"assets/assets/gallery/yeye108.jpg": "81e20a8e1171c23608e08cc3ba8353c3",
"assets/assets/gallery/yeye109.jpg": "8c7df6fb7ddc6510bc4c0b64c579f190",
"assets/assets/gallery/yeye11.jpg": "dda4f3b38219cb7581b8db16fa914804",
"assets/assets/gallery/yeye110.jpg": "df3ae20e0803c1f99ae10e43740e9b99",
"assets/assets/gallery/yeye111.jpg": "bf7f2852dff52603ea96ab98afbacba7",
"assets/assets/gallery/yeye112.jpg": "0e61fc4abb83bae36cbb51ec87281567",
"assets/assets/gallery/yeye12.jpg": "04ce305951ab8dc77a109eb0ab7b7216",
"assets/assets/gallery/yeye13.jpg": "8db7c3bdb360823f29beec2a9e65d8a6",
"assets/assets/gallery/yeye14.jpg": "f730d493219c7f753bf7ddfb9bbc9f75",
"assets/assets/gallery/yeye15.jpg": "4bcadf892a1af2ec9c4c07723ff3aff7",
"assets/assets/gallery/yeye16.jpg": "284f813d1278eceeecf3db7f3c6fd8e8",
"assets/assets/gallery/yeye17.jpg": "fd741d436a8666ecdacc31b66db8d214",
"assets/assets/gallery/yeye18.jpg": "f23bd64211fdf37df70a927f7f5f76d6",
"assets/assets/gallery/yeye19.jpg": "0c6310eb3fe9a3157ba1db282d0a4f7a",
"assets/assets/gallery/yeye2.jpg": "9fa2915b152b14e8ce7b5e4f15258fd8",
"assets/assets/gallery/yeye20.jpg": "4e9fb3c8e378c63fc0975ac1a0da6ed2",
"assets/assets/gallery/yeye21.jpg": "8a80575691c32c5f21ffab717db7211a",
"assets/assets/gallery/yeye22.jpg": "d318e4e2964c95ebc45e043227b71874",
"assets/assets/gallery/yeye23.jpg": "6e1a4fff3ff992a259eb885f49573254",
"assets/assets/gallery/yeye24.jpg": "f61b6a0e61b7efe768c10ed2a9d0a0c0",
"assets/assets/gallery/yeye25.jpg": "58c807b82c7f057d7f54f50001212746",
"assets/assets/gallery/yeye26.jpg": "d6f2cf51b212aac9599f13434af458c8",
"assets/assets/gallery/yeye27.jpg": "83acdd3e99eb98ab55de4d18cbf736b5",
"assets/assets/gallery/yeye28.jpg": "a5add99c8e225127148a115d15211cec",
"assets/assets/gallery/yeye29.jpg": "28a5ab7657876e38e41ee84de23a567f",
"assets/assets/gallery/yeye3.jpg": "3d7f2bd48b2b484baf53d9f1582c2925",
"assets/assets/gallery/yeye30.jpg": "0bc73e814444b07a26306bb7467f5332",
"assets/assets/gallery/yeye31.jpg": "6fbbe9b8fd04dda130abf896f972874a",
"assets/assets/gallery/yeye32.jpg": "aae156b1341a0bb9c94caa32934edcf4",
"assets/assets/gallery/yeye33.jpg": "c1f123cbd67d1fe534e05bac3f3c83ec",
"assets/assets/gallery/yeye34.jpg": "351bf1784432e06b9d0ae99bbadd64d9",
"assets/assets/gallery/yeye35.jpg": "55efa55fd6a6b404f6c1515c52957583",
"assets/assets/gallery/yeye36.jpg": "fb2d98cee42d8cb863bc59f4117afab5",
"assets/assets/gallery/yeye37.jpg": "a46c417970d2182ceb74a916c6145a53",
"assets/assets/gallery/yeye38.jpg": "67be153700de3014bcea490d1facd4f0",
"assets/assets/gallery/yeye39.jpg": "7078afa0f1fa62617bd366aebc84ec5a",
"assets/assets/gallery/yeye4.jpg": "812b70d20b61d4dacc9b00ecfa810aed",
"assets/assets/gallery/yeye40.jpg": "e3f262e311c14f3c6a4ab19318fdb25b",
"assets/assets/gallery/yeye41.jpg": "882aae74028fc8cbb1e0ce67d31e4d46",
"assets/assets/gallery/yeye42.jpg": "40b9920304be8e03dd09c2b7f28d67af",
"assets/assets/gallery/yeye43.jpg": "2dd6f14dbc5c87bc25ff2f4f2f908de2",
"assets/assets/gallery/yeye44.jpg": "d59a428c3be9f2e5ad90ac2b78314862",
"assets/assets/gallery/yeye45.jpg": "27a913d44eb3ce5807534e020a9740a7",
"assets/assets/gallery/yeye46.jpg": "ca4b02dc8dca451e175c1877a56f11f8",
"assets/assets/gallery/yeye47.jpg": "97c2b2eca24bded0306018e7ea2e5643",
"assets/assets/gallery/yeye48.jpg": "43df4b0a8452c0ffe450adbdd000fc9a",
"assets/assets/gallery/yeye49.jpg": "5c52911f24af9c16b4582963ed25c146",
"assets/assets/gallery/yeye5.jpg": "bceee237b8d87125c37c24de2c417362",
"assets/assets/gallery/yeye50.jpg": "736e60e497fc37a83934c1a5a3705001",
"assets/assets/gallery/yeye51.jpg": "57c332ff87e2f78644aff9949a876e51",
"assets/assets/gallery/yeye52.jpg": "41981f20745a016fab9b6da291414e4f",
"assets/assets/gallery/yeye53.jpg": "25ebbdf3c9c8b922ba12d01d956658e8",
"assets/assets/gallery/yeye54.jpg": "f1530a4ef0174c994d0775d533e8f6f7",
"assets/assets/gallery/yeye55.jpg": "3ef71a201fb542fd3d1e979cf766d90e",
"assets/assets/gallery/yeye56.jpg": "4875f02ab801ec31f7a14c9bad62c382",
"assets/assets/gallery/yeye57.jpg": "cdce5e00c443d5424e723b08800412dd",
"assets/assets/gallery/yeye58.jpg": "189a9ad6e1c352dd18e377aea245a234",
"assets/assets/gallery/yeye59.jpg": "b5c4b01f18a7d62b1689df1eef3dbe51",
"assets/assets/gallery/yeye6.jpg": "a3d51afb1fe944bbd3af6e4efd489d27",
"assets/assets/gallery/yeye60.jpg": "d9d499a0b5bc2dca99c2b5ba5a9abb98",
"assets/assets/gallery/yeye61.jpg": "8c7df6fb7ddc6510bc4c0b64c579f190",
"assets/assets/gallery/yeye62.jpg": "c852c58d20dc83382dda61892b4bb502",
"assets/assets/gallery/yeye63.jpg": "53bcd6f6906f920aee608c018aa8f6d1",
"assets/assets/gallery/yeye64.jpg": "42a6ee0ca455e3dacaddf99e85696442",
"assets/assets/gallery/yeye65.jpg": "6e2814ad92afe30cb931173234ca1162",
"assets/assets/gallery/yeye66.jpg": "d820a8738ff38f350e544590190a94dc",
"assets/assets/gallery/yeye67.jpg": "794b2277598956aa336be2f6178960d3",
"assets/assets/gallery/yeye68.jpg": "94e19d46c5a79949dd047317b345c256",
"assets/assets/gallery/yeye69.jpg": "a74edcc8f5801413f93fbea69281ad28",
"assets/assets/gallery/yeye7.jpg": "fe86a33d11ce3846058b97dd33c76309",
"assets/assets/gallery/yeye70.jpg": "e1fe5d9dc99fcccefebab6cf9dbcb895",
"assets/assets/gallery/yeye71.jpg": "ddf1ef75e5d65ff75f1be55ec90c88f7",
"assets/assets/gallery/yeye72.jpg": "0faedd267dd5485cd6a4937dc96d9cf2",
"assets/assets/gallery/yeye73.jpg": "603c007618d8d6aa06b945b14dd7e84b",
"assets/assets/gallery/yeye74.jpg": "05a40104935f2dc5d40b7fac5310e406",
"assets/assets/gallery/yeye75.jpg": "cb6ba4607cad0217a39d3fdc953b5838",
"assets/assets/gallery/yeye76.jpg": "2fbc0404d7db7df7080ec1a58ee7ce51",
"assets/assets/gallery/yeye77.jpg": "0838f984c812493b18fc503119342d2b",
"assets/assets/gallery/yeye78.jpg": "97ec330ccc9ebdeacaefe412c27dd606",
"assets/assets/gallery/yeye79.jpg": "def8d9a047515510e76f511e713e010b",
"assets/assets/gallery/yeye8.jpg": "fa67a6c96e6605c70cfcf42601afd886",
"assets/assets/gallery/yeye80.jpg": "58474974c5cea4f591e18af3f050a7a1",
"assets/assets/gallery/yeye81.jpg": "f6578cd71109fa8871f1a90782c700d2",
"assets/assets/gallery/yeye82.jpg": "a67b8e1e4a4c96be1e6d675a4cb29465",
"assets/assets/gallery/yeye83.jpg": "8a80575691c32c5f21ffab717db7211a",
"assets/assets/gallery/yeye84.jpg": "d08e37d5006b2ce9b75db7b54e5923d6",
"assets/assets/gallery/yeye85.jpg": "71724815a02731ed257232dcb5f9eb95",
"assets/assets/gallery/yeye86.jpg": "4b61a8c9ff581e04d42a19e50b4506e6",
"assets/assets/gallery/yeye87.jpg": "5251c8395ac6b86b3402b40482194bac",
"assets/assets/gallery/yeye88.jpg": "0899d0a1aabab5f58e27a852d435102a",
"assets/assets/gallery/yeye89.jpg": "0c222b0c29469246930393563dc24599",
"assets/assets/gallery/yeye9.jpg": "e1cbb470f52555c6b6ae718cf2590637",
"assets/assets/gallery/yeye90.jpg": "73bdd2e9464de030d7df9e8335139b02",
"assets/assets/gallery/yeye91.jpg": "140ea7e0898362a808ac7f1271bc9251",
"assets/assets/gallery/yeye92.jpg": "fecaa4b14dd7ff9a9f952e275fd87e08",
"assets/assets/gallery/yeye93.jpg": "19c8929f3e287e6789626e86ec44fe43",
"assets/assets/gallery/yeye94.jpg": "bdf88a9902f8a8242ed8eceecfbe1744",
"assets/assets/gallery/yeye95.jpg": "8b501c2e8465e2445ef30ea8b5c48721",
"assets/assets/gallery/yeye96.jpg": "7d09442f8fbaf35e9df4bc85827c298c",
"assets/assets/gallery/yeye97.jpg": "c7f0f61cea6dc95d6a52cc3b848dc32e",
"assets/assets/gallery/yeye98.jpg": "974f0eab47b1dbe89c0fe665270e07d8",
"assets/assets/gallery/yeye99.jpg": "8bdc78a72fb82a5be5e9e1991cfa3c4d",
"assets/assets/images/banners/banne6r3.jpg": "592a9f6e7daab650fb1a526b38141799",
"assets/assets/images/banners/banner1.jpg": "49064ae69bed86898677e6468dd6c6cc",
"assets/assets/images/banners/banner2.jpg": "d94a829f12079b924d9a7bba65980cfd",
"assets/assets/images/banners/banner3.jpg": "9e937ba5fca3e91f5a0424561a93e44f",
"assets/assets/images/banners/banner33.jpg": "bc15b96ae34afd074b7db4e93b6d0150",
"assets/assets/images/banners/banner333.jpg": "fd9ce782aff6434280ee9496bca4a66e",
"assets/FontManifest.json": "904a75b4898d22431951da056d0644c6",
"assets/fonts/MaterialIcons-Regular.otf": "689ccc38fee4504d611c0c9055198183",
"assets/NOTICES": "6a9e60209b4ed10c718477f00b794771",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f4a45f86692f2bf443fc3ec7e7510c0c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "993374a9f435fe69848083325cf7a7e8",
"/": "993374a9f435fe69848083325cf7a7e8",
"main.dart.js": "afe270f004fdfefb59d21caaa3796b4c",
"manifest.json": "2ad1e38ce8761d33bae70fc493fa22f6",
"version.json": "1ef347ac493a9f9192238f73628b83d9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
