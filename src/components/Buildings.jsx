import React from 'react';

import Building from './Building';

class Buildings extends React.Component {
    state = {
        buildings: [
            {   
                id: 1,
                name: "Productor",
                price: 15,
                numberOfBuilding: 0,
                cookiesPerSec : 0.1,
            },
            {   
                id: 2,
                name: "Royalties",
                price: 100,
                numberOfBuilding: 0,
                cookiesPerSec : 1,
            },
            {   
                id: 3,
                name: "Album",
                price: 1000,
                numberOfBuilding: 0,
                cookiesPerSec : 8,
            },
            {   
                id: 4,
                name: "Concert at Olympia",
                price: 12000,
                numberOfBuilding: 0,
                cookiesPerSec : 47,
            },
            {   
                id: 5,
                name: "Grammy Award",
                price: 130000,
                numberOfBuilding: 0,
                cookiesPerSec : 260,
            },
            {   
                id: 6,
                name: "Passed away from an overdose",
                price: 1400000,
                numberOfBuilding: 0,
                cookiesPerSec : 1400,
            },
        ],
    }

    handleClick = (id) => {
        let buildings = [...this.state.buildings]; // = this.state.buildings.slice();
        const index = buildings.findIndex(building => building.id === id); // utile ???
        if (this.props.getCount >= buildings[index].price) { 
            this.props.onUpdateCookies(-buildings[index].price);
            this.props.onUpdatePerSec(buildings[index].cookiesPerSec);
            buildings[index].price = Math.floor(buildings[index].price * 1.15);
            buildings[index].numberOfBuilding++
            buildings.push({
                id: 450,
                name: "zeojzeo",
                price: 345432,
                numberOfBuilding: 45,
                cookiesPerSec: 4455666
            })
            console.log(buildings, this.state.buildings)
            this.setState({ buildings });
        }
    }

    render() {
        return (
            <>
                {this.state.buildings.map(building => (
                    <Building 
                    key={building.id}
                    details={building}
                    onUpdateBuilding={this.handleClick}
                    />
                ))}
            </>
        )
    }
}

export default Buildings