// server.js
import "dotenv/config";
import app from "./src/app.js";
import os from "os";

const PORT = process.env.IPORT || 3000;

function getLocalIPs() {
  const nets = os.networkInterfaces();
  const results = [];

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        results.push(net.address);
      }
    }
  }

  return results;
}

app.listen(PORT, () => {
  const ips = getLocalIPs();

  console.log(`Server running:`);
  console.log(`  http://localhost:${PORT}`);

  ips.forEach(ip => {
    console.log(`  http://${ip}:${PORT}`);
  });
});
