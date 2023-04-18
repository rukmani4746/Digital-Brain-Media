import React from "react";
import { Link } from "react-router-dom";
const user ={
  name:'TODO APP',
  imageUrl:'https://www.saturdaygift.com/wp-content/uploads/Pretty-printable-to-do-lists-by-SaturdayGift-1024x576.jpg'
}

export default function Home() {
  return (
    <>
      <div className="header">
        <h1>Welcome to TASK LISTER</h1>
        <h3>Developed by RUKMANI AHIRWAR</h3>
      
        
      </div>
      <div className="nav-links">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/login"} className="nav-link">
          Login
        </Link>
        <Link to={"/register"} className="nav-link">
          Register
        </Link>
        <img className="todoImg" src={user.imageUrl}
        alt={'Photo of ' + user.name}
        
        ></img>
      </div>
    </>
  );
}
