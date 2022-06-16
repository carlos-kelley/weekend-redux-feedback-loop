const { query } = require("express");
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get('/', (req, res) => {
  console.log('/feedback GET');
  res.send('meow');
}
);

router.post("/", (req, res) => {
  console.log('/feedback POST:', req.body);
  let queryString = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4);`;
  let values = [
    req.body.feeling,
      req.body.understanding,
      req.body.support,
      req.body.comments,
  ];
  pool
    .query(queryString, values)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}); // END POST Route

module.exports = router;