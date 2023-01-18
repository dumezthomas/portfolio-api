const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const runServer = async () => {
  console.log("Server starting");

  await require("./db").dbConnect();

  server.use(bodyParser.json());
  server.use("/api/projects", require("./routes/projects"));

  const PORT = parseInt(process.env.PORT, 10) || 3001;
  server.listen(PORT, (err) => {
    if (err) console.error(err);
    else console.log("Server ready on port:", PORT);
  });
};

runServer();
