const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");

const server = jsonServer.create();

// Path to your db.json
const dbPath = path.join(__dirname, "..", "db.json");
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

// Important: Add the auth middleware
// This binds the router db to the server for authentication
server.db = router.db;

// Middleware to strip /api prefix for json-server
server.use((req, res, next) => {
  if (req.url.startsWith("/api")) {
    req.url = req.url.replace("/api", "");
  }
  next();
});

server.use(middlewares);
server.use(auth);
server.use(router);

module.exports = server;
