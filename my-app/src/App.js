import React from "react";
import Search from "./components/Search";
import ViewBuilding from "./components/ViewBuilding";
import BuildingList from "./components/BuildingList";
import Credit from "./components/Credit";
import AddBuilding from "./components/AddBuilding";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      filterText: "",
      selectedBuilding: 0,
      toggle: false
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });
  }

  addBuilding(building) {
    var newBuildings = this.state.data;
    building.id = this.state.data.length + 1;
    newBuildings.push(building);
    this.setState({});
  }

  removeUpdate = id => {
    console.log(id);
    console.log("Remove button clicked");
    this.setState({
      data: this.state.data.filter(building => building.id !== id),
      selectedBuilding: 0
    });
  };

  render() {
    return (
      <div className="bg">
        <div className="row Head header">
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="addBuilding">
            <AddBuilding addBuilding={this.addBuilding.bind(this)} />
          </div>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    filterText={this.state.filterText}
                    data={this.state.data}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeUpdate={this.removeUpdate}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.data}
                selectedBuilding={this.state.selectedBuilding}
                addBuilding={this.addBuilding.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
