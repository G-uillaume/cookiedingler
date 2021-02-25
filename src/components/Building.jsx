import React from 'react';


class Building extends React.Component {
    render() {
        return (
            <div className="buildings" id={ "building" + this.props.details.id}>
                <div>
                    <h3>{this.props.details.name}</h3>
                    <button onClick={() => this.props.onUpdateBuilding(this.props.details.id)}>Get it</button>
                </div>
                <div>
                    <p>Price = {this.props.details.price}</p>
                    <p>You have {this.props.details.numberOfBuilding}</p>
                </div>
            </div>
        )
    }
}

export default Building