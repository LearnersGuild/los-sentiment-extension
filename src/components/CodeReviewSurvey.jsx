import React, {Component, PropTypes} from 'react'

import Dialog from 'react-toolbox/lib/dialog'

import RangeQuestion from './RangeQuestion'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'

import styles from './CodeReviewSurvey.css'

const changeSizeChoices = [
  {value: 1, name: 'Tiny', description: 'typo, documentation, one-line change, formatting, etc.'},
  {value: 2, name: 'Small', description: 'minor Improvement or bugfix isolated to 1 or 2 parts of the system'},
  {value: 3, name: 'Medium', description: 'significant change'},
  {value: 4, name: 'Large', description: 'massive new feature or structural refactoring'},
]

const changeQualityChoices = [
  {value: 1, name: 'Strongly Disagree', description: 'I am terrified of this code.'},
  {value: 2, name: 'Disagree', description: 'I will actively avoid touching this code.'},
  {value: 3, name: 'Somewhat Disagree', description: 'The structure of this code will make changing it take more effort than it should.'},
  {value: 4, name: 'Somewhat Agree', description: 'This code wouldn\'t get in the way of changes / extensions too much.'},
  {value: 5, name: 'Agree', description: 'This code will be straightforward to work with and is well tested.'},
  {value: 6, name: 'Strongly Agree', description: 'This code will be a pleasure to work with and will make my job easier.'},
]

/* eslint-disable react/require-optimization */
class CodeReviewSurvey extends Component {
  render() {
    const {active, onClose, onSubmit} = this.props
    const actions = [
      {label: 'Cancel', onClick: onClose},
      {label: 'Save', onClick: onSubmit},
    ]

    return (
      <Dialog
        className={styles.survey}
        actions={actions}
        active={active}
        onEscKeyDown={this.handleClose}
        onOverlayClick={this.handleClose}
        title="Feedback on this PR"
        >

        <RangeQuestion
          prompt="How big is this change?"
          name="changeSize"
          choices={changeSizeChoices}
          value={2}
          />

        <MultipleChoiceQuestion
          prompt="This code would be easy for me to change or extend in the future:"
          name="changeQuality"
          choices={changeQualityChoices}
          value="3"
          />

      </Dialog>
    )
  }
}

CodeReviewSurvey.propTypes = {
  author: PropTypes.string.isRequired,
  reviewer: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default CodeReviewSurvey
