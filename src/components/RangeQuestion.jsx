import React, {PropTypes} from 'react'

import {CardText} from 'react-toolbox/lib/card'
import Slider from 'react-toolbox/lib/slider'

const RangeQuestion = props => {
  const {prompt, name, choices, value} = props
  const explanation = choices[value] || 'Unknown'
  const possibleValues = Object.keys(choices).map(choice => parseInt(choice, 10))
  const min = possibleValues.sort().slice(0, 1)
  const max = possibleValues.sort().slice(-1, 1)

  return (
    <section>
      <CardText><strong>{prompt}</strong></CardText>
      <Slider
        name={name}
        snaps
        min={min}
        max={max}
        step={1}
        />
      <CardText>{explanation}</CardText>
    </section>
  )
}

RangeQuestion.propTypes = {
  prompt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  choices: PropTypes.object.isRequired,
  value: PropTypes.number,
}

export default RangeQuestion
