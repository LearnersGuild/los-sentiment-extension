/* global document window */
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

function getInitialState() {
  const url = window && window.location ? window.location.href : 'unknown'
  const reviewerImg = document.querySelector('img.avatar')
  const authorAnchor = document.querySelector('a.author')
  const reviewer = reviewerImg ? reviewerImg.alt.slice(1) : 'unknown'
  const author = authorAnchor ? authorAnchor.innerText : 'unknown'
  const deducedSize = deducePRSize()

  return {url, author, reviewer, deducedSize}
}

const initialState = getInitialState()

export function gitHub(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
