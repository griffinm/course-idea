import React from 'react'
import { DragSource } from 'react-dnd';

import { CollectionItem } from './'

const Types = {
  ITEM: 'collection-item',
}

const itemSource = {
  beginDrag(props) {
    console.log(props)
  },

  endDrag(props) {
    console.log(props)
  },
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class DraggableCollectionItem extends React.Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props
    return connectDragSource(
      <ul className='collection-item'>
        {this.props.children}
      </ul>
    )
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(DraggableCollectionItem)
