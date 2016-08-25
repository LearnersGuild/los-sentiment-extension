import {combineReducers} from 'redux'

import {gitHub} from './gitHub'
import {reviewerSurvey} from './reviewerSurvey'
import {errors} from './errors'

const rootReducer = combineReducers({
  gitHub,
  reviewerSurvey,
  errors,
})

export default rootReducer
