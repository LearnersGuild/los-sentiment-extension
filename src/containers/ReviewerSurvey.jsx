import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {updateReviewerSurvey} from '../actions/reviewerSurvey'
import ReviewerSurveyComponent from '../components/ReviewerSurvey'

const ReviewerSurvey = props => {
  const {dispatch} = props
  const handleChange = surveyData => dispatch(updateReviewerSurvey(surveyData))
  const handleClose = () => dispatch(updateReviewerSurvey({active: false}))
  const handleSubmit = () => console.warn('TODO: submit to Keen.io')

  return (
    <ReviewerSurveyComponent
      {...props}
      onChange={handleChange}
      onClose={handleClose}
      onSubmit={handleSubmit}
      />
  )
}

ReviewerSurvey.propTypes = {
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  reviewer: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  size: PropTypes.bool.isRequired,
  quality: PropTypes.bool.isRequired,
  isBusy: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    url: state.gitHub.url,
    author: state.gitHub.author,
    reviewer: state.gitHub.reviewer,
    ...state.reviewerSurvey,
    size: state.reviewerSurvey.size || state.gitHub.deducedSize,
  }
}

export default connect(mapStateToProps)(ReviewerSurvey)
