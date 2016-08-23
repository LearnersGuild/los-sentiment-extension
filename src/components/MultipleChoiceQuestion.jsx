import React, {PropTypes} from 'react'

import {CardText} from 'react-toolbox/lib/card'
import {RadioGroup, RadioButton} from 'react-toolbox/lib/radio'

const MultipleChoiceQuestion = props => {
  const {prompt, name, choices, value} = props
  const radioButtons = Object.keys(choices).map(value => {
    const label = choices[value]
    return (
      <RadioButton key={value} label={label} value={value}/>
    )
  })

  return (
    <section>
      <CardText><strong>{prompt}</strong></CardText>
      <CardText>
        <RadioGroup name={name} value={value}>
          {radioButtons}
        </RadioGroup>
      </CardText>
    </section>
  )
}

MultipleChoiceQuestion.propTypes = {
  prompt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  choices: PropTypes.object.isRequired,
  explanations: PropTypes.object.isRequired,
  value: PropTypes.string,
}

export default MultipleChoiceQuestion
