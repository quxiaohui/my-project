import React from "react";
import { withRouter } from "react-router-dom";

class Market extends React.Component {



  onClick = () => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <div>
        <button onClick ={ this.onClick }>back</button>
        Market
      </div>
    )
  }
}

export default withRouter(Market);
