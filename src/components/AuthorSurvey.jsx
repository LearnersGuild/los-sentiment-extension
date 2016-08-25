import React, {Component, PropTypes} from 'react'

import {Button} from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'

import MultipleChoiceQuestion from './MultipleChoiceQuestion'

import styles from './AuthorSurvey.css'

const codeQualityChoices = [
  {value: 1, name: 'Strongly Disagree', description: 'I was terrified of this code.'},
  {value: 2, name: 'Disagree', description: 'I actively avoided touching parts of the code.'},
  {value: 3, name: 'Somewhat Disagree', description: 'Because of the state of the code when I found it, these changes took more effort than they should have.'},
  {value: 4, name: 'Somewhat Agree', description: 'The existing code didn\'t get in my way too much.'},
  {value: 5, name: 'Agree', description: 'This code was straightforward to work with and is well tested.'},
  {value: 6, name: 'Strongly Agree', description: 'This code was be a pleasure to work with and made my job easy.'},
]

/* eslint-disable react/require-optimization */
class AuthorSurvey extends Component {
  handleLaunchSurvey = () => this.props.onChange({active: true})
  handleChangeQuality = quality => this.props.onChange({quality})

  render() {
    const {active, quality, onClose, onSubmit} = this.props
    const actions = [
      {label: 'Cancel', onClick: onClose},
      {label: 'Save', onClick: onSubmit, disabled: !quality},
    ]
    const buttonDisplay = active ? 'none' : 'block'

    return (
      <div>
        <Button
          className={styles.launchSurvey}
          style={{display: buttonDisplay}}
          raised
          primary
          icon="assignment"
          label="Rate the Code"
          onClick={this.handleLaunchSurvey}
          />
        <Dialog
          className={styles.surveyDialog}
          actions={actions}
          active={active}
          onEscKeyDown={this.handleClose}
          onOverlayClick={this.handleClose}
          title="How was the code when you found it?"
          >

          <MultipleChoiceQuestion
            prompt="This code was easy to change / extend:"
            name="codeQuality"
            choices={codeQualityChoices}
            value={quality}
            onChange={this.handleChangeQuality}
            />

        </Dialog>
      </div>
    )
  }
}

AuthorSurvey.propTypes = {
  active: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quality: PropTypes.number.isRequired,
  isBusy: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default AuthorSurvey
