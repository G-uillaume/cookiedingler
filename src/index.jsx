import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Cookie from './components/Cookie';
import SideBar from './components/SideBar';
import Buildings from './components/Buildings';

class App extends React.Component {

    state = {
        cookies: 0,
        cookiesPerSec: 0,
        totalCookies: 0,
    }
    
    updateCookies = (x) => {
        let cookies =  this.state.cookies;
        cookies += x;
        this.setState({ cookies });
    }

    updateTotalCookies = (x) => {
        let totalCookies = this.state.totalCookies;
        totalCookies += x;
        this.setState({ totalCookies });
    }
    
    updateCookiesPerSec = (x) => {
        let cookiesPerSec = this.state.cookiesPerSec;
        cookiesPerSec += x;
        this.setState({ cookiesPerSec })
    }
    
    interval = setInterval(() => {
        console.log('coucou')
        if (this.state.cookiesPerSec > 0) {
            this.updateCookies(this.state.cookiesPerSec)
            this.updateTotalCookies(this.state.cookiesPerSec)
        }
    }, 1000);
    
    render() {
        
        return(
            <>
                <h1>Welcome to the Cookie Dingler clicker !</h1>
                <main>
                    <SideBar>
                        <Buildings 
                        onUpdateCookies={this.updateCookies}
                        getCount = {this.state.cookies}
                        onUpdatePerSec = {this.updateCookiesPerSec}
                         />
                    </SideBar>
                    <Cookie 
                    onUpdateCookies={this.updateCookies} // ---> this.props.onUpdateCookies
                    getCount={this.state.cookies}
                    getTotal={this.state.totalCookies}
                    getCookiesPerSec={this.state.cookiesPerSec} // ----> this.props.getCount
                    onUpdateTotalCookies={this.updateTotalCookies}
                    />
                    {/* <p>{console.log(this.state.cookies)}</p> */}
                </main>
            </>
        )
    } 
}

ReactDOM.render(<App />, document.querySelector('#root'));