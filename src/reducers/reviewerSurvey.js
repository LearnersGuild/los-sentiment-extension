import {
  UPDATE_REVIEWER_SURVEY,
} from '../actions/reviewerSurvey'

const initialState = {
  active: true,
  size: 3, // medium
  quality: null,
  isBusy: false,
}

export function reviewerSurvey(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REVIEWER_SURVEY:
      return Object.assign({}, state, action.surveyData)
    default:
      return state
  }
}
