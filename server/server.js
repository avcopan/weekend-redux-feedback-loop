const express = require("express");
const app = express();
const surveyRouter = require("./routes/survey.router.js");
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/survey", surveyRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
