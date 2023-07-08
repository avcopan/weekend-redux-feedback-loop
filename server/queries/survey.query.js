const pool = require("../modules/pool");

const getSurveys = async () => {
  const queryString = "SELECT * FROM feedback;";

  try {
    const result = await pool.query(queryString);
    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const addSurvey = async (survey) => {
  const queryString = `
    INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4);
  `;
  const queryParams = [
    survey.feeling,
    survey.understanding,
    survey.support,
    survey.comments,
  ];

  try {
    return pool.query(queryString, queryParams);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getSurveys,
  addSurvey,
};
