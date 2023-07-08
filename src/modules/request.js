import axios from "axios";

const handleError = (error) => {
  alert(error);
  console.error(error);
  return error;
};

export const getSurveys = async () => {
  try {
    const res = await axios.get("/survey");
    return res.data;
  } catch (error) {
    return handleError(error);
  }
};

export const addSurvey = async (requestBody) => {
  try {
    await axios.post("/survey", requestBody);
  } catch (error) {
    return handleError(error);
  }
};
