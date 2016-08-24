import React, {PropTypes} from 'react'

import {RadioGroup, RadioButton} from 'react-toolbox/lib/radio'

import styles from './MultipleChoiceQuestion.scss'

const MultipleChoiceQuestion = props => {
  const {prompt, name, choices, value, onChange} = props
  const radioButtons = choices.map(choice => {
    const label = (
      <p className={styles.choice}>
        <span className={styles.choiceName}>{choice.name}</span>:
        <span className={styles.choiceDescription}> {choice.description}</span>
      </p>
    )
    return (
      <RadioButton key={choice.value} label={label} value={choice.value}/>
    )
  })

  return (
    <section className={styles.multipleChoiceQuestion}>
      <h3><strong>{prompt}</strong></h3>
      <RadioGroup name={name} value={value} className={styles.radioGroup} onChange={onChange}>
        {radioButtons}
      </RadioGroup>
    </section>
  )
}

MultipleChoiceQuestion.propTypes = {
  prompt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  explanations: PropTypes.object.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default MultipleChoiceQuestion
