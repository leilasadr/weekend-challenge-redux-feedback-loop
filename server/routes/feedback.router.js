const express = require("express");
const router = express.Router();
const pool = require ("../modules/pool.js");

router.get("/", (req, res) => {
  const queryText = "SELECT * FROM feedback";
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
})
  .catch((error) => {
  console.log("Error getting feedback data from database:", error);
  res.sendStatus(500);
  });
})

router.post("/", (req, res) => {

  const queryText = `
   INSERT INTO "feedback" ("feeling")
   VALUES ($1);
  `;
  const queryValues = 
    [req.body.feeling]
    ;

  pool.query(queryText, queryValues)
    .then((result) => {
    console.log("Feedback added to the database:");
    res.sendStatus(201);
    })
  .catch((error) => {
    console.log("ERROR adding feedback to database:", error);
    res.sendStatus(500);
  })
});

  module.exports = router;


