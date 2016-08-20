import React, {Component, PropTypes} from 'react'

import {Button} from 'react-toolbox/lib/button'
import {Card, CardActions, CardText, CardTitle} from 'react-toolbox/lib/card'
import Slider from 'react-toolbox/lib/slider'

import styles from './CodeReviewSurvey.css'

const valueNames = [
  'N/A',
  'Strongly Disagree',
  'Disagree',
  'Somewhat Disagree',
  'Somewhat Agree',
  'Agree',
  'Strongly Agree',
]
const valueDescriptions = [
  '(use the slider to assess the code you just reviewed)',
  'I am terrified of this code.',
  'I will actively avoid touching this code.',
  'The structure of this code will make changing it take more effort than it should.',
  'This code wouldn\'t get in the way of changes / extensions too much.',
  'This code will be straight-forward to work with and is well tested.',
  'This code will be a pleasure to work with and will make my job easier.',
]

/* eslint-disable react/require-optimization */
class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(value) {
    this.setState({value})
  }

  handleSubmit() {
  }

  render() {
    console.log('props:', this.props)
    return (
      <section className={styles.app}>
        <Card className={styles.survey}>
          <CardTitle>This code would be easy for me to change or extend in the future:</CardTitle>
          <Slider
            snaps
            value={this.state.value}
            min={0}
            max={6}
            step={1}
            onChange={this.handleChange}
            />
          <CardText className={styles.explanation}>
            <strong>{valueNames[this.state.value]}</strong>
          </CardText>
          <CardText className={styles.explanation}>{valueDescriptions[this.state.value]}</CardText>
          <CardActions className={styles.actions}>
            <Button
              raised
              primary
              disabled={this.state.value === 0}
              icon="done"
              label="Submit"
              onClick={this.handleSubmit}
              />
          </CardActions>
        </Card>
      </section>
    )
  }
}

App.propTypes = {
  author: PropTypes.string.isRequired,
  reviewer: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default App
