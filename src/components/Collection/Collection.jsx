import React from 'react'

class Collection extends React.Component {
  render() {
    return (
      <ul className="collection">
        {this.props.children}
      </ul>
    )
  }
}

export default Collection
