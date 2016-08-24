import React, {PropTypes} from 'react'

import CodeReviewSurvey from '../components/CodeReviewSurvey'

/* global document */
function renderCodeReviewSurvey(url) {
  // get author and reviewer and PR URL
  const reviewerImg = document.querySelector('img.avatar')
  const authorAnchor = document.querySelector('a.author')
  const reviewer = reviewerImg ? reviewerImg.alt.slice(1) : 'unknown'
  const author = authorAnchor ? authorAnchor.innerText : 'unknown'
  const onSubmit = () => console.log('sumitting ...')
  const onClose = () => console.log('closing ...')

  console.log('Rendering code review survey ...')
  return (
    <CodeReviewSurvey
      author={author}
      reviewer={reviewer}
      url={url}
      active
      onClose={onClose}
      onSubmit={onSubmit}
      />
  )
}

const Root = ({url}) => {
  if (url.match(/^https:\/\/github\.com\/\w+\/\w+\/pull\/\d+\/files$/)) {
    return renderCodeReviewSurvey(url.replace('/files', ''))
  }

  // if our URL doesn't match anything we care about, render nothing
  return <div style={{display: 'none'}}/>
}

Root.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Root
