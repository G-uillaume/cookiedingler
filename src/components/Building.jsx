import React from 'react';


class Building extends React.Component {
    render() {
        return (
            <div className="buildings" id={ "building" + this.props.details.id}>
                <div className="buildingLeft">
                    {/* <h3>{this.props.details.name}</h3> */}
                    <button onClick={() => this.props.onUpdateBuilding(this.props.details.id)}>{this.props.details.name} <small>({this.props.details.cookiesPerSec} fan(s)/s)</small></button>
                </div>
                <div className="buildingRight">
                    <p>Price = {this.props.details.price}</p>
                    <p>You have {this.props.details.numberOfBuilding}</p>
                </div>
            </div>
        )
    }
}

export default Building