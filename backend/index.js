
import path    from "path";
import express from "express";

const NODE_ENV = process.env.NODE_ENV || "development";

const config = require(path.resolve(__dirname, 'config', NODE_ENV));

const app = express();

app.use(express.static(path.resolve(__dirname, "../frontend")));

app.listen(config.port, config.host, function(err) {

  if(err) {
    console.error("Error listening:", err);
    process.exit(1);
  }

  console.log(`Listening on ${config.host}:${config.port}`);

});
