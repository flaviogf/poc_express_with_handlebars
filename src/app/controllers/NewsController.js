class NewsController {
  constructor({ database }) {
    this.database = database;
  }

  async index(req, res) {
    const news = await this.database.models.News.findOne({ raw: true });

    return res.render("news/index.hbs", { news: [news, news, news, news] });
  }
}

export default NewsController;
