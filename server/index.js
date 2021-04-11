"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("config"));
var path_1 = require("path");
var app = express_1["default"]();
app.set("port", process.env.PORT || config_1["default"].get("PORT"));
app.use(express_1["default"].static("build"));
app.get("/*", function (req, res) {
    res.sendFile(path_1.join(__dirname, 'build', 'index.html'));
});
app.listen(app.get("port"), function () { return console.log("Server ready at port: " + app.get("port") + "."); });
