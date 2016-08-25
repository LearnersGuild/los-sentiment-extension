import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'

import Survey from './Survey'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Survey/>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
