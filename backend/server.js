const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('listening on 3000')
  res.send(`Hello World`)
});

app.get('/search-ingredient/:id', (req, res) => {
  const wiki = require('wikipedia');

  (async () => {
    try {
      wiki.setLang('pt');
      let searchResults = await wiki.search(req.params.id);
      let suggestedIngredient = searchResults.results[0].title;

      if (suggestedIngredient) {

        let searchPage = await wiki.page(suggestedIngredient);
        let intro = await searchPage.intro();
        let images = await searchPage.images();

        res.send({
          ingredient: suggestedIngredient,
          intro: intro,
          images: images
        });
      }

    } catch (error) {
      console.log(error);
      res.send(error);
    }
  })();
});

app.post('/upload-photo', (req, res) => {
  let photo = req.body;

  console.log(req.body);
  console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);

});

app.listen(port);
