import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Snackbar} from 'react-toolbox'

import {dismissError} from '../actions/dismissError'
import AuthorSurvey from './AuthorSurvey'
import ReviewerSurvey from './ReviewerSurvey'

const Survey = props => {
  const {gitHub: {author, reviewer}, errors: {messages}, dispatch} = props
  const isAuthor = author === reviewer && author !== 'unknown'

  // if our URL doesn't match anything we care about, render nothing
  let childSurvey = <div style={{display: 'none'}}/>
  // reviewer survey
  if (isAuthor) {
    childSurvey = <AuthorSurvey/>
  } else {
    childSurvey = <ReviewerSurvey/>
  }

  const renderedErrors = messages.map((err, i) => {
    const handleDismiss = () => dispatch(dismissError(i))
    return (
      <Snackbar
        key={i}
        active
        action="Dismiss"
        icon="error"
        label={err}
        type="warning"
        onClick={handleDismiss}
        />
    )
  })

  return (
    <div>
      {childSurvey}
      {renderedErrors}
    </div>
  )
}

Survey.propTypes = {
  gitHub: PropTypes.shape({
    author: PropTypes.string.isRequired,
    reviewer: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    messages: PropTypes.array.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    gitHub: state.gitHub,
    errors: state.errors,
  }
}

export default connect(mapStateToProps)(Survey)
