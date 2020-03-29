import React, { useState, useEffect } from "react";
import  axiosWithAuth   from "../utils/axiosWithAuth";
import Addfriend from "./Addfriend";

const Friends = () => {
    const [friend, setFriend] = useState([]);
    const [update, setUpdate] = useState(false);
    //const [find, setFind] = useState(0);

    const getData = () => { 
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log(res);
                setFriend(res.data)
            })
            .catch(err => {
                console.log(err);
            });

         }// getData

        useEffect(() => {
            getData()
            setUpdate(false)
        },[update])

        const handleChange = e => {
            return e.target.value;
        }// handleChange

        return (
            <div>
                <h1>Friends</h1>
                <div>
                    {friend.map(item => {
                        return (
                            <div key={item.id}> 
                            <h2>Id: {item.id}</h2>
                            <p>Name: {item.name}</p>
                            <p>Age: {item.age}</p>
                            <p>Email: {item.email}</p>

                            </div> //key
                        )
                    })}
                </div>

            </div>
        ) //return

  

} //Friends

export default Friends;