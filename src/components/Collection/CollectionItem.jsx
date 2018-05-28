import React from 'react'

class CollectionItem extends React.Component {
  render() {
    return (
      <li className="collection-item">
        {this.props.children}
      </li>
    )
  }
}

export default CollectionItem
