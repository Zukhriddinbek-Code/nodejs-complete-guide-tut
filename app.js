const http = require("http");
const fs = require("fs");

// const rqListener = (req, res) => {};

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello from zuhriddin ganiev page!</title></head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='create-user'><button type='submit'>Send</button></form></body>"
    );
    return res.write("</html>");
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<body><ul><li>User 1</li></ul></body>");

    return res.write("</html>");
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello world from node!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
