const userspostId = async (props) =>{
    const data = await props.params;
    console.log(data);
    
    return(
         <h1>
         id =    {data.postId}
         </h1>
    )
}

export default userspostId;