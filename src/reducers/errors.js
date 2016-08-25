import {DISMISS_ERROR} from '../actions/dismissError'
import {SAVE_SURVEY_FAILURE} from '../actions/saveSurvey'

const initialState = {
  messages: [],
}

function appendMessage(state, message) {
  const messages = state.messages.slice(0)
  messages.push(message)
  return messages
}

function removeMessage(state, index) {
  const messages = state.messages.slice(0)
  messages.splice(index, 1)
  return messages
}

export function errors(state = initialState, action) {
  switch (action.type) {
    case DISMISS_ERROR:
      return Object.assign({}, state, {
        messages: removeMessage(state, action.index)
      })
    case SAVE_SURVEY_FAILURE:
      return Object.assign({}, state, {
        messages: appendMessage(state, action.error),
      })
    default:
      return state
  }
}
