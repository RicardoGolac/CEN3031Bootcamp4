import React from "react";
import RemoveBuilding from "./RemoveBuilding";

class BuilingList extends React.Component {
  handleClick(param, e) {
    //console.log(param);
    this.props.selectedUpdate(param);
  }

  render() {
    //console.log('This is my directory file', this.props.data);
    const { data } = this.props;
    const { filterText } = this.props;
    const buildingList = data
      .filter(name => {
        return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
      })
      .map(directory => {
        return (
          <tr
            key={directory.id}
            onClick={e => {
              this.handleClick(directory.id, e);
            }}
          >
            <td>{directory.code} </td>
            <td> {directory.name} </td>
            <RemoveBuilding {...this.props} buildID={directory.id} />
          </tr>
        );
      });

    return <div>{buildingList}</div>;
  }
}
export default BuilingList;
