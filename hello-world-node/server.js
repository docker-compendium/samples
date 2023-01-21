const http = require("http");
const os = require("os");

http.createServer((req, res) => {
  const dateTime = new Date(),
    load = os.loadavg(),
    doc = `<!DOCTYPE html>
<html>
  <head>
    <title>Hello world</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>Hello world: node</h1>
    Date: ${dateTime}<br />
    CPU usage (load): ${load[0]}
  </body>
</html>`
  res.setHeader('Content-Type', 'text/html');
  res.end(doc);
}).listen(8080);
