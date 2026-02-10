import { parentPort, workerData } from "worker_threads";
import { readFile } from "fs/promises";
import path from "path";
async function readFiles(files) {
    const results = [];
    for (const file of files) {
        const filePath = path.join(__dirname, "../../json", file);
        const content = await readFile(filePath, "utf-8");
        results.push(JSON.parse(content));
    }
    return results;
}
readFiles(workerData.files)
    .then((data) => parentPort?.postMessage(data))
    .catch((err) => parentPort?.postMessage({ error: err.message }));
//# sourceMappingURL=jsonWorkers.js.map