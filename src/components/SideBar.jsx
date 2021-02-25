import React from 'react';

class SideBar extends React.Component {
    render() {
        return (
            <div id="sideBar">
                {this.props.children}
            </div>
        )
    }
}

export default SideBar