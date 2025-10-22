// public/geometryWorker.js
self.onmessage = function (e) {
  const { data } = e;
  // Simulate heavy computation
  const result = data.map((val) => val * 2);
  self.postMessage(result);
};
