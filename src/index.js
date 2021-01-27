import React from 'react';
import ReactDOM from 'react-dom';

// function greeting(name) {
//   if (name) {
//     return <h1>Hello, { name }!</h1>
//   }
//   return <h1>Hello, Stranger.</h1>
// }
// let root = greeting('')

// let names = ['张三', '李四', '王五']
// let elements = []
// for (let i = 0; i < names.length; i++) {
//   elements.push(<li>{ names[i] }</li>)
// }

function tick() {
  const element = (
    <div>
      { new Date().toLocaleDateString() }
    </div>
  )
}

ReactDOM.render(
  tick,
  document.getElementById('root')
);
