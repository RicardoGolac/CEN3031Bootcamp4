import React from "react";

class RemoveBuilding extends React.Component {
  sendData = () => {
    const id = this.props.buildID;
    this.props.removeUpdate(id);
  };
  render() {
    return (
      <div className="RemoveBuilding">
        <button onClick={this.sendData}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
export default RemoveBuilding;
