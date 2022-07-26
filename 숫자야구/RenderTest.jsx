import React from 'react';
import { PureComponent } from 'react';

class Test extends PureComponent {
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: {},
    array: [],
  };
  
// shouldComponentUpdate(nextProps, nextState, nextContext) {
//   if(this.state.counter !== nextState.counter) {
//     return true
//   }
//   return false
// }

  onClick = () => {
    this.setState({
      array: [...this.state.array, 1],
    });
  }
  render() {
    console.log('렌더링',this.state);
    return (
      <di>
        <button onClick={this.onClick}>클릭</button>
      </di>
    )
  }
}
export default Test;