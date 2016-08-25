import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {updateAuthorSurvey} from '../actions/authorSurvey'
import AuthorSurveyComponent from '../components/AuthorSurvey'

const AuthorSurvey = props => {
  const {dispatch} = props
  const handleChange = surveyData => dispatch(updateAuthorSurvey(surveyData))
  const handleClose = () => dispatch(updateAuthorSurvey({active: false}))
  const handleSubmit = () => console.warn('TODO: submit to Keen.io')

  return (
    <AuthorSurveyComponent
      {...props}
      onChange={handleChange}
      onClose={handleClose}
      onSubmit={handleSubmit}
      />
  )
}

AuthorSurvey.propTypes = {
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  quality: PropTypes.bool.isRequired,
  isBusy: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    url: state.gitHub.url,
    author: state.gitHub.author,
    ...state.authorSurvey,
  }
}

export default connect(mapStateToProps)(AuthorSurvey)
