import express from "express";
import config from "config";
import { join } from "path";

const app = express();

app.set("port", process.env.PORT || config.get("PORT"));

app.use(express.static("build"));

app.get("/*", (req, res) => {
    res.sendFile(join(__dirname, "build", "index.html"));
});

app.listen(app.get("port"), () => console.log(`Server ready at port: ${app.get("port")}.`));