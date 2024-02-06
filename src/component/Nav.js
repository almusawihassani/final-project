import React from "react"; 



function Nav () { 
    return (
        <nav>   
            <a href="#"><img src={logo}  alt="logo"/></a> 

        <ul> 
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Servecis</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Ordering Online</a></li>
            <li><a href="#">Loge in</a></li>
        </ul>

        </nav> 
       
    )
}


export default Nav; 