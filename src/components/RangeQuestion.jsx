import React, {PropTypes} from 'react'

import Slider from 'react-toolbox/lib/slider'

import styles from './RangeQuestion.scss'

const explanationNameColors = {
  1: 'DarkGreen',
  2: 'DarkBlue',
  3: 'Goldenrod',
  4: 'DarkOrange',
}

const RangeQuestion = props => {
  const {prompt, name, choices, value, onChange} = props
  const possibleValues = choices.map(choice => choice.value)
  const min = possibleValues.sort()[0]
  const max = possibleValues.sort()[possibleValues.length - 1]
  const selectedChoice = choices.find(choice => choice.value === value)
  const explanationNameColor = explanationNameColors[value] || 'DimGrey'

  return (
    <section className={styles.rangeQuestion}>
      <h3><strong>{prompt}</strong></h3>
      <Slider
        name={name}
        snaps
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={onChange}
        />
      <p className={styles.explanation}>
        <span className={styles.explanationName} style={{backgroundColor: explanationNameColor}}>{selectedChoice.name}</span>
        <span>{selectedChoice.description}</span>
      </p>
    </section>
  )
}

RangeQuestion.propTypes = {
  prompt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default RangeQuestion
