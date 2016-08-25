export const UPDATE_AUTHOR_SURVEY = 'UPDATE_AUTHOR_SURVEY'

export function updateAuthorSurvey(surveyData) {
  return {type: UPDATE_AUTHOR_SURVEY, surveyData}
}
