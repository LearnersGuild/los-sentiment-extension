import {
  UPDATE_AUTHOR_SURVEY,
} from '../actions/authorSurvey'

const initialState = {
  active: false,
  size: 3, // medium
  quality: null,
  isBusy: false,
}

export function authorSurvey(state = initialState, action) {
  switch (action.type) {
    case UPDATE_AUTHOR_SURVEY:
      return Object.assign({}, state, action.surveyData)
    default:
      return state
  }
}
