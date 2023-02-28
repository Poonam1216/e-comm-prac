import React from "react";
import './header.css'
const Header =()=>{
    return(
        <div className="header">
                <div className="left"> USER ID
                </div>
                <div className="right">
                <select name="userID" className="userID">
                     <option value="user_name"> User Name </option>
                     <option value="login">Logout</option>
                </select>
                </div>
        </div>
    )
}
// localStorage.getItem('name').toUpperCase()

export default Header;