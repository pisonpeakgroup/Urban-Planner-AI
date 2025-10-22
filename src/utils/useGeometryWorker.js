// src/utils/useGeometryWorker.js
export function useGeometryWorker(data) {
  const worker = new Worker('/geometryWorker.js');

  worker.postMessage(data);
  worker.onmessage = (e) => {
    console.log('Worker result:', e.data);
  };
}
