// Kumar 001 backend starter.
// This file is intentionally minimal. The current chat runs locally in the browser.
// When adding a real AI provider, keep API keys on the server in environment variables.
// Never put secret API keys in public/js/app.js or public/index.html.
const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, app: "Kumar 001" }));
    return;
  }
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Kumar 001 backend starter is running. Open the public/index.html file for the demo chat.");
});

server.listen(PORT, () => {
  console.log(`Kumar 001 starter server listening on port ${PORT}`);
});
