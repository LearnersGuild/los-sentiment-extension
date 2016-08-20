/* global document window */
import 'react-toolbox/lib/commons.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import CodeReviewSurvey from './components/CodeReviewSurvey.jsx'

function importFonts() {
  // react-toolbox needs Roboto and "Material Icons" fonts
  const fontImports = [
    'https://fonts.googleapis.com/css?family=Roboto',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
  ].map(url => `@import '${url}';`)
  const fontStyle = document.createElement('style')
  fontStyle.type = 'text/css'
  fontStyle.textContent = fontImports.join('\n')
  document.head.appendChild(fontStyle)
}

function appendAppDiv() {
  // append our survey at the end of the code review
  const mainDiv = document.querySelector('div[role="main"]')
  const appDiv = document.createElement('div')
  mainDiv.parentNode.insertBefore(appDiv, mainDiv.nextSibling)

  return appDiv
}

function appendCodeReviewSurvey(url) {
  // get author and reviewer and PR URL
  const reviewerImg = document.querySelector('img.avatar')
  const authorAnchor = document.querySelector('a.author')
  const reviewer = reviewerImg ? reviewerImg.alt.slice(1) : 'unknown'
  const author = authorAnchor ? authorAnchor.innerText : 'unknown'
  const appDiv = appendAppDiv()
  importFonts()

  ReactDOM.render(<CodeReviewSurvey author={author} reviewer={reviewer} url={url}/>, appDiv)
}

const url = window && window.location ? window.location.href : 'unknown'
if (url.match(/^https:\/\/github\.com\/\w+\/idm\/pull\/\d+\/files$/)) {
  console.log('Launching code review survey ...')
  appendCodeReviewSurvey(url.replace('/files', ''))
}
