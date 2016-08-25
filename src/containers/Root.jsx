import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'

import ReviewerSurvey from './ReviewerSurvey'

const Root = ({store}) => {
  const {gitHub: {author, reviewer}} = store.getState()
  const isAuthor = author === reviewer && author !== 'unknown'
  console.log({isAuthor})

  // if our URL doesn't match anything we care about, render nothing
  let child = <div style={{display: 'none'}}/>
  // reviewer survey
  if (!isAuthor) {
    console.info('rendering code review survey ...')
    child = <ReviewerSurvey/>
  }

  return (
    <Provider store={store}>
      {child}
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
