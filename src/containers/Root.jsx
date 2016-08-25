import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'

import AuthorSurvey from './AuthorSurvey'
import ReviewerSurvey from './ReviewerSurvey'

const Root = ({store}) => {
  const {gitHub: {author, reviewer}} = store.getState()
  const isAuthor = author === reviewer && author !== 'unknown'

  // if our URL doesn't match anything we care about, render nothing
  let child = <div style={{display: 'none'}}/>
  // reviewer survey
  if (isAuthor) {
    console.info('rendering author survey ...')
    child = <AuthorSurvey/>
  } else {
    console.info('rendering reviewer survey ...')
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
