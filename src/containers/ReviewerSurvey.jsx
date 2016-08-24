import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {updateReviewerSurvey} from '../actions/reviewerSurvey'
import ReviewerSurveyComponent from '../components/ReviewerSurvey'

const ReviewerSurvey = ({url, active, size, quality, isBusy, dispatch}) => {
  /* global document */
  const reviewerImg = document.querySelector('img.avatar')
  const authorAnchor = document.querySelector('a.author')
  const reviewer = reviewerImg ? reviewerImg.alt.slice(1) : 'unknown'
  const author = authorAnchor ? authorAnchor.innerText : 'unknown'
  const handleChange = surveyData => dispatch(updateReviewerSurvey(surveyData))
  const handleClose = () => dispatch(updateReviewerSurvey({active: false}))
  const handleSubmit = () => console.warn('TODO: submit to Keen.io')

  return (
    <ReviewerSurveyComponent
      active={active}
      author={author}
      reviewer={reviewer}
      url={url}
      size={size}
      quality={quality}
      isBusy={isBusy}
      onChange={handleChange}
      onClose={handleClose}
      onSubmit={handleSubmit}
      />
  )
}

ReviewerSurvey.propTypes = {
  url: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  size: PropTypes.bool.isRequired,
  quality: PropTypes.bool.isRequired,
  isBusy: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function deducePRSize() {
  const commitsCounter = document.querySelector('#commits_tab_counter')
  const filesCounter = document.querySelector('#files_tab_counter')
  const numCommits = parseInt(commitsCounter.innerText, 10)
  const numFiles = parseInt(filesCounter.innerText, 10)
  if (numFiles === 1 && numCommits === 1) {
    return 1
  } else if (numFiles <= 3 && numCommits <= 3) {
    return 2
  } else if (numFiles <= 5 && numCommits <= 5) {
    return 3
  }
  return 4
}

function mapStateToProps(state) {
  return {
    ...state.reviewerSurvey,
    size: deducePRSize(),
  }
}

export default connect(mapStateToProps)(ReviewerSurvey)
