import express from "express";
import { Sequelize } from "sequelize";
import NewsController from "./app/controllers/NewsController";
import News from "./app/models/News";
import databaseConfig from "./config/database";

const database = new Sequelize(databaseConfig);

const models = [News];

models
  .map((it) => it.init(database))
  .map((it) => it.associate(database.models));

const newsController = new NewsController({ database });

const routes = express.Router();

routes.get("/news", (req, res) => newsController.index(req, res));

export default routes;
