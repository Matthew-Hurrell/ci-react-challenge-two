import React from 'react';
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Log in',
            name: 'Hello, guest!',
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === 'Log in' ? 'Log out' : 'Log in',
                name: prevState.name === 'Hello, guest!' ? 'Welcome back, user!' : 'Hello, guest!',
            }
        },
            console.log(this.state.message)
        )
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.name}</span>
                    <button onClick={() => this.handleClick()}>{this.state.message}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple