import React from 'react';
import ReactDOM from 'react-dom';

class CanvasTree extends React.Component {
	render() {
	  return <canvas id="canvas" width="512" height="256"></canvas>
	}

	componentDidMount() {
	    let canvasDom =	document.getElementById('canvas');
		console.log(canvasDom,'componentDidMound');
	}
  }

ReactDOM.render(
  <CanvasTree />,
  document.getElementById('root')
);
