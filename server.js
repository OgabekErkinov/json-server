const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 5000; // JSON Server porti
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
