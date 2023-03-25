import React, { Component } from 'react';
import css from "./css/NavBarSimple.module.css";
import NavBarChild from './NavBarChild';

export class NavBarForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: false,
        }
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {
                isLoggedIn: prevState.isLoggedIn === false ? true : false,
            }
        })
    }

    render() {
        return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            {/* {this.state.isLoggedIn ?  (
                <button onClick={() => this.handleClick()}>Log in</button>
            ) : (
                <form id="login-form">
                    <label for="username">Username:</label>
                    <input type="text" id="username" placeholder="username"></input>
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="password"></input>
                    <button type="submit" onClick={() => this.handleClick()}>Submit</button>
                </form>
            )} */}
            <NavBarChild 
                handleClick={this.handleClick}
                isLoggedIn={this.state.isLoggedIn} 
            />
        </div>
        )
    }
}

export default NavBarForm