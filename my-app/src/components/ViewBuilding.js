import React from "react";
//import AddBuilding from "./AddBuilding";

class ViewBuilding extends React.Component {
  render() {
    const data = this.props.data;
    const view = data
      .filter(name => {
        return name.id === this.props.selectedBuilding;
      })
      .map(directory => {
        return (
          <div key={directory}>
            <h2>ID: {directory.id}</h2>
            <p>Name: {directory.name}</p>
            <p>Code: {directory.code}</p>
            {!directory.address && <p>No Address</p>}
            {directory.address && <p>Address: {directory.address}</p>}
            {!directory.coordinates && <p>No coordinates</p>}
            {directory.coordinates && directory.coordinates.latitude && (
              <p>Latitude: {directory.coordinates.latitude}</p>
            )}
            {directory.coordinates && directory.coordinates.longitude && (
              <p>Longitude: {directory.coordinates.longitude}</p>
            )}
          </div>
        );
      });

    return (
      <div>
        <p>
          <i>Click on a name to view more information</i>
        </p>
        <p>{view}</p>
      </div>
    );
  }
}
export default ViewBuilding;
