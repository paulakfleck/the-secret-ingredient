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

app.post('/add-credit', (req, res) => {
  // let newCreditData = req.body;

  // fs.readFile('./data/credits.json', 'utf8', (err, data) => {
  //     if (err) {
  //         console.error(err);
  //         res.status(500).send(err);
  //     }

  //     let credits = JSON.parse(data);

  //     console.log(credits[credits.length - 1]);

  //     if (credits[credits.length - 1]) {
  //         let $last = credits[credits.length - 1];

  //         newCreditData.id = $last.id + 1;

  //     } else {
  //         newCreditData.id = 1;
  //     }

  //     console.log('current id', newCreditData.id);

  //     console.log(`newCreditData`, newCreditData);
  //     console.log(`-------------------------------------------------`);

  //     credits.push(newCreditData);

  //     fs.writeFile("./data/credits.json", JSON.stringify(credits), (err) => {
  //         if (err) {
  //             console.error(err);
  //             res.status(500).send(err);
  //         }
  //         res.sendStatus(200);
  //     });
  // });

});

app.listen(port);
