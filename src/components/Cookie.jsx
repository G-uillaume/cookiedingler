import React from 'react';
import img from '../img/cookie.jpeg';

class Cookie extends React.Component {

    render() {
        return (
            <div id="cookie">
                <img onClick={() => {
                    this.props.onUpdateCookies(1)
                    this.props.onUpdateTotalCookies(1)
                }} id="imgCookie" src={img} alt="Cookie Dingler" />
                <p>{this.props.getCount.toFixed(0)}</p>
                <p>{this.props.getCookiesPerSec.toFixed(2)} fan(s)/s</p>
                <p>So far, you have won {this.props.getTotal.toFixed(0)} fans</p>
            </div>
        )
    }
}

export default Cookie;