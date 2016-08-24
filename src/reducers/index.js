import {combineReducers} from 'redux'

import {reviewerSurvey} from './reviewerSurvey'
import {errors} from './errors'

const rootReducer = combineReducers({
  reviewerSurvey,
  errors,
})

export default rootReducer
