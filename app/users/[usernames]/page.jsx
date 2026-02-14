"use client"
import { use } from "react";
const users =  (props) =>{
    const data =use(props.params);
    console.log(data);
    
    return(
         <h1>

         user =    {data.usernames}
         </h1>
    )
}

export default users;