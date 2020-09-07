const Sequelize = require("sequelize");
const articles = require("./articles");

const sequelize = new Sequelize("dbName", "user", "password", {
  host: "localhost",
  dialect: "mariadb",
  port: 'port',
  dialectOptions: {
    timezone: process.env.db_timezone,
  },
});

const Article = sequelize.define("article", {
  title: { type: Sequelize.STRING },
  key: { type: Sequelize.STRING },
  date: { type: Sequelize.DATE },
  content: { type: Sequelize.TEXT },
  description: { type: Sequelize.TEXT },
  imageUrl: { type: Sequelize.STRING },
  viewCount: { type: Sequelize.INTEGER},
});

init = function () {
  sequelize
    .authenticate()
    .then(() => {
      console.log("connected to mariadb");
    })
    .catch((err) => {
      console.log("unnable to connect to db", err);
    });

  Article.sync({ force: true }).then(() => {
    Article.create({
      title: "My first article",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mi ornare, ornare eros ut, ornare orci. Nulla justo nisi, imperdiet ut malesuada vel, dictum quis tortor. Proin placerat est quis nisi aliquet, eu condimentum ligula porttitor. Fusce posuere tempor feugiat. Mauris porttitor viverra eros. Aenean placerat tellus lobortis nibh convallis tristique. Praesent condimentum a diam et venenatis. Donec aliquet eleifend interdum. Vestibulum ut eros a orci cursus feugiat. Pellentesque imperdiet leo vitae pulvinar ultrices. Nunc varius vel tortor at porta. Aliquam sapien risus, commodo vitae magna non, sollicitudin bibendum mauris. Proin rutrum ipsum nec feugiat fringilla. Aliquam consectetur libero porttitor sem imperdiet, vel ornare velit faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mi ornare, ornare eros ut, ornare orci. Nulla justo nisi, imperdiet ut malesuada vel, dictum quis tortor. Proin placerat est quis nisi aliquet, eu condimentum ligula porttitor. Fusce posuere tempor feugiat. Mauris porttitor viverra eros. Aenean placerat tellus lobortis nibh convallis tristique. Praesent condimentum a diam et venenatis. Donec aliquet eleifend interdum. Vestibulum ut eros a orci cursus feugiat. Pellentesque imperdiet leo vitae pulvinar ultrices. Nunc varius vel tortor at porta. Aliquam sapien risus, commodo vitae magna non, sollicitudin bibendum mauris. Proin rutrum ipsum nec feugiat fringilla. Aliquam consectetur libero porttitor sem imperdiet, vel ornare velit faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mi ornare, ornare eros ut, ornare orci. Nulla justo nisi, imperdiet ut malesuada vel, dictum quis tortor. Proin placerat est quis nisi aliquet, eu condimentum ligula porttitor. Fusce posuere tempor feugiat. Mauris porttitor viverra eros. Aenean placerat tellus lobortis nibh convallis tristique. Praesent condimentum a diam et venenatis. Donec aliquet eleifend interdum. Vestibulum ut eros a orci cursus feugiat. Pellentesque imperdiet leo vitae pulvinar ultrices. Nunc varius vel tortor at porta. Aliquam sapien risus, commodo vitae magna non, sollicitudin bibendum mauris. Proin rutrum ipsum nec feugiat fringilla. Aliquam consectetur libero porttitor sem imperdiet, vel ornare velit faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>",
      description: "This is my first article! It is great. Please read it =)",
      key: "my-first-article",
      date: new Date(),
      imageUrl: "http://angular.io/assets/images/logos/angular/angular.png",
    });
    Article.create({
      title: "My second article",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mi ornare, ornare eros ut, ornare orci. Nulla justo nisi, imperdiet ut malesuada vel, dictum quis tortor. Proin placerat est quis nisi aliquet, eu condimentum ligula porttitor. Fusce posuere tempor feugiat. Mauris porttitor viverra eros. Aenean placerat tellus lobortis nibh convallis tristique. Praesent condimentum a diam et venenatis. Donec aliquet eleifend interdum. Vestibulum ut eros a orci cursus feugiat. Pellentesque imperdiet leo vitae pulvinar ultrices. Nunc varius vel tortor at porta. Aliquam sapien risus, commodo vitae magna non, sollicitudin bibendum mauris. Proin rutrum ipsum nec feugiat fringilla. Aliquam consectetur libero porttitor sem imperdiet, vel ornare velit faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mi ornare, ornare eros ut, ornare orci. Nulla justo nisi, imperdiet ut malesuada vel, dictum quis tortor. Proin placerat est quis nisi aliquet, eu condimentum ligula porttitor. Fusce posuere tempor feugiat. Mauris porttitor viverra eros. Aenean placerat tellus lobortis nibh convallis tristique. Praesent condimentum a diam et venenatis. Donec aliquet eleifend interdum. Vestibulum ut eros a orci cursus feugiat. Pellentesque imperdiet leo vitae pulvinar ultrices. Nunc varius vel tortor at porta. Aliquam sapien risus, commodo vitae magna non, sollicitudin bibendum mauris. Proin rutrum ipsum nec feugiat fringilla. Aliquam consectetur libero porttitor sem imperdiet, vel ornare velit faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mi ornare, ornare eros ut, ornare orci. Nulla justo nisi, imperdiet ut malesuada vel, dictum quis tortor. Proin placerat est quis nisi aliquet, eu condimentum ligula porttitor. Fusce posuere tempor feugiat. Mauris porttitor viverra eros. Aenean placerat tellus lobortis nibh convallis tristique. Praesent condimentum a diam et venenatis. Donec aliquet eleifend interdum. Vestibulum ut eros a orci cursus feugiat. Pellentesque imperdiet leo vitae pulvinar ultrices. Nunc varius vel tortor at porta. Aliquam sapien risus, commodo vitae magna non, sollicitudin bibendum mauris. Proin rutrum ipsum nec feugiat fringilla. Aliquam consectetur libero porttitor sem imperdiet, vel ornare velit faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>",
      description: "Also a great article!!",
      key: "my-second-article",
      date: new Date(),
      imageUrl:
        "http://angular.io/assets/images/logos/angular/angular_solidBlack.png",
    });
  });
};

getArticles = function (callback) {
  Article.findAll({ order: sequelize.literal("date DESC") }).then((articles) =>
    callback(articles)
  );
};

getArticleByKey = function (options, callback) {
  Article.findOne({ where: { key: options.key } }).then((article) => {
    if(article !== null) {
      article.update({
        viewCount: ++article.viewCount
      })
    }
    callback(article);
  });
};

module.exports.init = init;
module.exports.getArticles = getArticles;
module.exports.getArticleByKey = getArticleByKey;