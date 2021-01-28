const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
app.use(cors());
app.use(express.static('backend'));
// app.use(express.urlencoded({ extended: true }));

const upload = multer({
  dest: "/uploads/product-image"
});

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

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

// app.post('/upload-photo', (req, res) => {
//   let photo = req.body;

//   console.log(req.file);
//   console.log(req.file.path);
//   console.log(req.file.type);

// });

app.post("/upload-photo", upload.single("file"), (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, `./uploads/product-image/${req.file.originalname}`);
    const ext = path.extname(req.file.originalname).toLowerCase();

    if ((ext === ".png") || (ext === ".jpg") || (ext === ".jpeg")) {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/plain")
          .end("File uploaded!");

      });

    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png, .jpeg and .jpg files are allowed!");
      });
    }
  }
);

app.listen(port);
