/* global document */
import 'react-toolbox/lib/commons.scss'
import React from 'react'
import {render} from 'react-dom'

import configureStore from './store/configureStore'
import Root from './containers/Root'

import './index.css'

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

function appendExtensionDiv() {
  // append our survey at the end of the code review
  const mainDiv = document.querySelector('div[role="main"]')
  const extDiv = document.createElement('div')
  extDiv.className = 'extension'
  mainDiv.parentNode.insertBefore(extDiv, mainDiv.nextSibling)

  return extDiv
}

const extDiv = appendExtensionDiv()
importFonts()
const store = configureStore({})

render(<Root store={store}/>, extDiv)
