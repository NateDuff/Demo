import React, { Component } from 'react';

class Helper extends Component {
  dothings (event) {
    event.preventDefault();

    document.getElementById('counter').innerText = parseInt(document.getElementById('counter').innerText) + 1
  }

  render() {
    return (
        <div className="helper">
            <div id="counter">1</div>
          <button id="demobutton" onClick={ e => {this.dothings(e)} }>Click Me</button>
        </div>
      );
  }
}

export default Helper;
