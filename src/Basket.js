import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

const spec = {
  drop: (props, monitor) => {
    const message = `Dropped: ${monitor.getItem().color}`;
    document.getElementById('console').innerHTML += `${message}<br />`;
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

class Basket extends PureComponent {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  }

  render() {
    const isOver = this.props.isOver;
    const canDrop = this.props.canDrop;
    const connectDropTarget = this.props.connectDropTarget;
      const style = { backgroundColor: (isOver && canDrop) ? '#f3f3f3' : '#cccccc', border: '1px dashed black',
        display: 'inline-block',
        width: 100,
        height: 100,
        margin: 10
      };

    return connectDropTarget(<div className="square" style={style} />);
  }
}

export default DropTarget('square', spec, collect)(Basket);
