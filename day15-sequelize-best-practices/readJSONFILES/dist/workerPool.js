import { Worker } from "worker_threads";
import path from "path";
export function runWorkers(files, workerCount = 4) {
    return new Promise((resolve, reject) => {
        const chunkSize = Math.ceil(files.length / workerCount);
        const results = [];
        let finished = 0;
        for (let i = 0; i < workerCount; i++) {
            const chunk = files.slice(i * chunkSize, (i + 1) * chunkSize);
            if (chunk.length === 0)
                continue;
            const worker = new Worker(path.resolve(__dirname, "workers/jsonWorker.js"), {
                workerData: { files: chunk },
            });
            worker.on("message", (data) => {
                if (data?.error) {
                    reject(data.error);
                    return;
                }
                results.push(...data);
                finished++;
                if (finished === workerCount) {
                    resolve(results);
                }
            });
            worker.on("error", reject);
        }
    });
}
//# sourceMappingURL=workerPool.js.map