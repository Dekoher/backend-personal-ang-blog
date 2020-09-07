const ARTICLES = require('./mock-articles');

module.exports = function(app, sql) {
  app.get('/articles', function(req, res) {
    sql.getArticles(function(result) {
      res.send(result);
    });
  });

  app.get('/articles/:key', function(req, res) {
    // res.send(ARTICLES.filter(article => article.key === req.params.key)[0]);
    sql.getArticleByKey({ key: req.params.key }, function(article) {
      res.send(article)
    });
  });
}