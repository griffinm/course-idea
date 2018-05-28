import React from 'react'
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd'

import data from './data'
import { Collection, CollectionItem, DraggableCollectionItem } from '@/components/Collection'

class ExerciseGroupBank extends React.Component {

  renderItems() {
    return data.map((item) =>
      <DraggableCollectionItem key={item.id}>{item.title}</DraggableCollectionItem>
    )
  }

  render() {
    return (
      <div>
        <h2>Exercise Groups</h2>
        <Collection>
          {this.renderItems()}
        </Collection>n>
      </div>
    )
  }
}

export default ExerciseGroupBank
