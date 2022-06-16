//requires
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//begin post route
router.post("/", (req, res) => {
  console.log("/feedback POST:", req.body);
  //insert the feedback into the database
  const queryString = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
  //values to be inserted into the database
  const values = [
    req.body.feeling,
    req.body.understanding,
    req.body.support,
    req.body.comments,
  ];
  //pool.query takes in the query string and the values to be inserted
  pool
    .query(queryString, values)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
}); // END POST Route

module.exports = router;