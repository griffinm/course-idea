import React from 'react'
import classNames from 'classnames'

import ExerciseGroupBank from '@/components/ExerciseGroupBank'
import Row from '@/components/Row'
import Column from '@/components/Column'

class CourseBuilder extends React.Component {
  render() {
    return (
      <Row>
        <Column sizes="s4">
          <ExerciseGroupBank />
        </Column>
        <Column sizes="s12">
        </Column>
      </Row>
    )
  }
}

export default CourseBuilder
