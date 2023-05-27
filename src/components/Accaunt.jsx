import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./Accaunt.css"

const Accaunt = () => {
    return (
        <div>
            <div className="main">
                <div className="main2">
                <Avatar sx={{width: 180, height:180,}} alt="Diyorbek"/>
                <h2>username</h2>
                </div>
                <div className="follow">
                    <h5>1 140 subscribers</h5>
                    <h5>73 subscriptions</h5>
                </div>
            </div>
            <button className="btn btn1 btn-outline-primary "><Link to="/home">back to home</Link></button>
        </div>
    )
}

export default Accaunt