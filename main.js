function showpw() {
    var x = document.getElementById("pw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
'use strict';

const e = React.createElement;

class btnup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Updated: false };
  }

  render() {
    if (this.state.Updated) {
      return 'Update fall';
    }

    return e(
      'button',
      { onClick: () => this.setState({ Updated: true }) },
      'Update'
    );
  }
}

const domContainer = document.querySelector('#btnupd');
const root = ReactDOM.createRoot(domContainer);
root.render(e(btnup));