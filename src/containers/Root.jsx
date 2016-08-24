import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'

import ReviewerSurvey from './ReviewerSurvey'

const Root = ({store}) => {
  /* global window */
  const url = window && window.location ? window.location.href : 'unknown'

  // if our URL doesn't match anything we care about, render nothing
  let child = <div style={{display: 'none'}}/>
  // reviewer survey
  if (url.match(/^https:\/\/github\.com\/\w+\/\w+\/pull\/\d+/)) {
    console.info('rendering code review survey ...')
    child = <ReviewerSurvey url={url}/>
  }

  return (
    <Provider store={store}>
      {child}
    </Provider>
  )
}

Root.propTypes = {
  url: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired,
}

export default Root
