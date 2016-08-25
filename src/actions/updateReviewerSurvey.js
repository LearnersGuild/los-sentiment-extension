export const UPDATE_REVIEWER_SURVEY = 'UPDATE_REVIEWER_SURVEY'

export function updateReviewerSurvey(surveyData) {
  return {type: UPDATE_REVIEWER_SURVEY, surveyData}
}
