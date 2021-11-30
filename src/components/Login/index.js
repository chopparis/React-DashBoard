import React, { Component } from "react";
import './style.css';

export default class Login extends Component {
    render() {
        return (

<div className="loginWraper">
            <form >
                {/* <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar"></img>
                </div> */}

                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>

           
            </form>
            </div>
        );
    }
}
