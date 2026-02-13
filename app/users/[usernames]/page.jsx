const users = async (props) =>{
    const data = await props.params;
    console.log(data);
    
    return(
         <h1>

         user =    {data.usernames}
         </h1>
    )
}

export default users;