import express from "express";
import exphbs from "express-handlebars";
import path from "path";
import routes from "./routes";

const app = express();

app.engine(".hbs", exphbs({ extname: ".hbs" }));

app.set("view engine", ".hbs");

app.set("views", path.resolve(__dirname, "resources", "views"));

app.use("/public", express.static(path.resolve(__dirname, "public")));

app.use(routes);

app.listen(3333, () => console.log("It's running"));
