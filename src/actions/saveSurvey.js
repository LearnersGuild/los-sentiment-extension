import keenIO from 'keen.io'

export const AUTHOR_SURVEYS = 'losSentimentAuthorSurveys'
export const REVIEWER_SURVEYS = 'losSentimentReviewerSurveys'

export const SAVE_SURVEY_REQUEST = 'SAVE_SURVEY_REQUEST'
export const SAVE_SURVEY_SUCCESS = 'SAVE_SURVEY_SUCCESS'
export const SAVE_SURVEY_FAILURE = 'SAVE_SURVEY_FAILURE'

const VALID_COLLECTIONS = [AUTHOR_SURVEYS, REVIEWER_SURVEYS]

function saveSurveyRequest() {
  return {type: SAVE_SURVEY_REQUEST}
}

function saveSurveySuccess() {
  return {type: SAVE_SURVEY_SUCCESS}
}

function saveSurveyFailure(error) {
  return {type: SAVE_SURVEY_FAILURE, error}
}

export function saveSurvey(collection, surveyData) {
  return dispatch => {
    if (VALID_COLLECTIONS.indexOf(collection) < 0) {
      return dispatch(saveSurveyFailure(`collection must be one of: ${VALID_COLLECTIONS.join(', ')}`))
    }

    dispatch(saveSurveyRequest())

    const keenClient = keenIO.configure({
      projectId: '57bed8de8db53dfda8a6d0c8',
      writeKey: '500D9035E54AAAACD337A46BBCD90738F2291CDD08EA778F88F18FECBE636C979A6F4E29F5A8D0E852D2899DFCC0D4937CB5064BE4D9EDA95370D603828EB3F2DF18733D756F215596B63FB0BB46CA0BE21C626A48C3D137464BF972D682D4B0',
    })
    keenClient.addEvent(collection, surveyData, err => {
      if (err) {
        console.error('could not save:', err)
        dispatch(saveSurveyFailure('Could not save your feedback.'))
      } else {
        dispatch(saveSurveySuccess())
      }
    })
  }
}
