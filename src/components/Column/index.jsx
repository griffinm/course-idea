import React from 'react'
import classNames from 'classnames'

class Column extends React.Component{
  render() {
    return (
      <div className={classNames('col', this.props.sizes)}>
        {this.props.children}
      </div>
    )
  }
}

export default Column;
