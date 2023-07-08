const express = require("express");
const query = require("../queries/survey.query");

const router = express.Router();

/**
 * @api {get} /survey - Get all surveys in the database
 */
router.get("/", async (_, res) => {
  try {
    surveys = await query.getSurveys();
    res.status(200).send(surveys);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

/**
 * @api {post} /survey - Add a new survey to the database
 */
router.post("/", async (req, res) => {
  try {
    await query.addSurvey(req.body);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
