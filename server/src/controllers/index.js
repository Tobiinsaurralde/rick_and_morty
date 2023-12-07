const http = require("http");
const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const server = express();
const PORT = 3001;
const characters = require("./utils/data");
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});
server.use(express.json());
server.use(morgan("dev"));

    if(req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      getCharById(res, id);      
    } else {
      return res
        .writeHead(404, { "Content-Type": "application/json" })
        .end(JSON.stringify({ message: "Wrong url" }));
    }
server.use("/rickandmorty", router);

})
  .listen(PORT, "127.0.0.1",
    () => (console.log(`Server listening on port ${PORT}`))
  );
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});