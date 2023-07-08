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

/**
 * Capitalize the first letter of a string (from https://stackoverflow.com/a/1026087)
 * 
 * @param {String} string 
 * @returns A first-letter-capitalized string.
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
