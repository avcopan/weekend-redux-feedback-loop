/**
 * Reformat a survey object into the data format required by the API
 *
 * @param {Object} survey A survey object in serveySlice format
 * @returns A survey object in API format
 */
export const makeRequestBodyFromSurvey = (survey) => {
  const requestBody = {};
  for (const item of survey) {
    requestBody[item.key] = item.response;
  }
  return requestBody;
};
