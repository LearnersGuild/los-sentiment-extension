import React, {Component, PropTypes} from 'react'

import {Button} from 'react-toolbox/lib/button'
import {Card, CardActions, CardTitle} from 'react-toolbox/lib/card'

import RangeQuestion from './RangeQuestion'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'

import styles from './CodeReviewSurvey.css'

/* eslint-disable react/require-optimization */
class CodeReviewSurvey extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
  }

  render() {
    const changeSizeChoices = {
      1: <div><strong>Tiny</strong>: typo, documentation, one-line change, formatting, etc.</div>,
      2: <div><strong>Small</strong>: minor Improvement or bugfix isolated to 1 or 2 parts of the system</div>,
      3: <div><strong>Medium</strong>: significant change</div>,
      4: <div><strong>Large</strong>: massive new feature or structural refactoring</div>,
    }

    const changeQualityChoices = {
      1: (
        <div>
          <strong>Strongly Disagree</strong>:
          <span className={styles.explanation}> I am terrified of this code.</span>
        </div>
      ),
      2: (
        <div>
          <strong>Disagree</strong>:
          <span className={styles.explanation}> I will actively avoid touching this code.</span>
        </div>
      ),
      3: (
        <div>
          <strong>Somewhat Disagree</strong>:
          <span className={styles.explanation}> The structure of this code will make changing it take more effort than it should.</span>
        </div>
      ),
      4: (
        <div>
          <strong>Somewhat Agree</strong>:
          <span className={styles.explanation}> This code wouldn't get in the way of changes / extensions too much.</span>
        </div>
      ),
      5: (
        <div>
          <strong>Agree</strong>:
          <span className={styles.explanation}> This code will be straightforward to work with and is well tested.</span>
        </div>
      ),
      6: (
        <div>
          <strong>Strongly Agree</strong>:
          <span className={styles.explanation}> This code will be a pleasure to work with and will make my job easier.</span>
        </div>
      ),
    }

    return (
      <Card className={styles.survey}>
        <CardTitle>Feedback on this PR</CardTitle>

        <RangeQuestion
          prompt="How big is this change?"
          name="changeSize"
          choices={changeSizeChoices}
          />

        <MultipleChoiceQuestion
          prompt="This code would be easy for me to change or extend in the future:"
          name="changeQuality"
          choices={changeQualityChoices}
          />

        <CardActions className={styles.actions}>
          <Button
            raised
            primary
            disabled={false}
            icon="done"
            label="Submit"
            onClick={this.handleSubmit}
            />
        </CardActions>
      </Card>
    )
  }
}

CodeReviewSurvey.propTypes = {
  author: PropTypes.string.isRequired,
  reviewer: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default CodeReviewSurvey
