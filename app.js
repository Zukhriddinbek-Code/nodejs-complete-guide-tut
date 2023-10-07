const http = require("http");
const routes = require("./routes");

// const rqListener = (req, res) => {};

const server = http.createServer(routes.handler);

server.listen(3000);
