import {combineReducers} from 'redux'

import {gitHub} from './gitHub'
import {authorSurvey} from './authorSurvey'
import {reviewerSurvey} from './reviewerSurvey'
import {errors} from './errors'

const rootReducer = combineReducers({
  gitHub,
  authorSurvey,
  reviewerSurvey,
  errors,
})

export default rootReducer
