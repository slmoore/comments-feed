const express = require('express');
const bodyParser = require('body-parser');

const DataAccessObject = require('./dataAccessObject');
const Comment = require('./comment');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataAccessObject = new DataAccessObject('./database.sqlite3');
const comment = new Comment(dataAccessObject);

comment.createTable().catch(error => {
  console.log(`Error: ${JSON.stringify(error)}`);
});

app.post('/createComment', function (request, response) {
  const { body } = request;
  comment.createComment(body).then(result => {
    response.send(result);
  });
});

/**
 * @note the `window.fetch` API does not allow a GET request to have a body.
 * The `id` in the `request.body` has been moved to a `query` parameter.
 * @link https://github.com/whatwg/fetch/issues/551
 */
app.get('/getComment', function (request, response) {
  const { id } = request.query;
  comment.getComment(id).then(result => {
    response.send(result);
  });
});

app.get('/getComments', function (request, response) {
  comment.getComments().then(result => {
    response.send(result);
  });
});

app.delete('/deleteComments', function (request, response) {
  comment.deleteComments().then(result => {
    response.send(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
  const rootDir = __dirname.replace('/server', '');
  response.sendFile(`${rootDir}/index.html`);
});
