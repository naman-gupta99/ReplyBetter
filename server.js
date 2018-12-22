import express from "express";
import path from "path";
import config from "./config";
import swagger from "./app/swagger";
import middleware from "./app/middleware";
import appRoutes from "./app/routes";
import mongodb from "./app/mongodb";

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

if(process.env.GEN_DOC === "true") {
  swagger(app);
}
mongodb();
middleware(app);
appRoutes(app);

app.listen(config.app.port);
console.log(`Listening on port ${config.app.port} ...`);

export default app;
