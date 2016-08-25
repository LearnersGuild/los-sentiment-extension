import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {updateAuthorSurvey} from '../actions/updateAuthorSurvey'
import {saveSurvey, AUTHOR_SURVEYS} from '../actions/saveSurvey'
import AuthorSurveyComponent from '../components/AuthorSurvey'

const AuthorSurvey = props => {
  const {dispatch} = props
  const handleChange = surveyData => dispatch(updateAuthorSurvey(surveyData))
  const handleClose = () => dispatch(updateAuthorSurvey({active: false}))
  const handleSubmit = () => {
    const surveyData = {
      url: props.url,
      author: props.author,
      quality: props.quality,
    }
    dispatch(saveSurvey(AUTHOR_SURVEYS, surveyData))
    dispatch(updateAuthorSurvey({active: false}))
  }

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
