Package.describe({
  name: 'raix:localforage-localstorage',
  version: '1.2.4-rc.1',
  summary: "Offline storage driver LocalStorage"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.2-rc.4');
  api.use('ecmascript', 'client');
  api.use('raix:localforage-serializer@1.2.4-rc.1', 'client');
  api.addFiles('localstorage.js', 'client');
  api.export('localStorageWrapper', 'client');
});
