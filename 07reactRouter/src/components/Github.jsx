import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";

function Github() {
    // const [userdata, setData] = useState([]);
    const userdata = useLoaderData()
    // const {userProfile} = useParams()
    // useEffect(() => {
    // try {
    //     fetch(`https://api.github.com/users/${userProfile} `)
    //         .then((response) => response.json())
    //         .then((data) => {
    //         setData(data);
    //         });
    // } catch (error) {
    //     console.log(error);
    // }
    // }, []);
    
    return <>
    <h2>{userdata.bio} Followers :  { userdata.followers} </h2>
    <img src={`${userdata.avatar_url}`} alt="profile picture" />
    </>;
}

export default Github;
export const gitData = async ()=>{
    try {
       const response = await fetch(`https://api.github.com/users/CodeWithHarry`)
       return response.json()
    } catch (error) {
        
    }
} 
