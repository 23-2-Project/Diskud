import http from "http";
import express from "express";

const app = express();

app.set("views", __dirname + "/../client/build");
app.use(express.static(__dirname + "/../client/build"));
app.get("/", (_, res) => res.render("index"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);

const handleListen = () => console.log(`Listening on http://localhost:4000`);
httpServer.listen(4000, handleListen);