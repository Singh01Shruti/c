import { useState } from "react" 
import axios from "axios";
export function CreateUser(){
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [interests, setInterests] = useState("");
const [twitter, setTwitter] = useState("");
const [linkedIn, setLinkedIn] = useState("");
const [instagram, setInstagram] = useState("");

    return (
        <>
        <div>
        <input style = {{
                padding: 10,
                margin: 10
            }}type = "text" placeholder="Name" onChange={function(e){
            const value = e.target.value;
            setName(value);
        }}></input><br />
        <input style = {{
                padding: 10,
                margin: 10
            }}type = "text" placeholder="Description" onChange={function(e){
                const value = e.target.value;
                setDescription(value);
            }}></input><br />
        <input style = {{
                padding: 10,
                margin: 10
            }}type = "text" placeholder="Interests" onChange={function(e){
                const value = e.target.value;
                setInterests(value);
            }}></input><br />
            <h4 style = {{
                padding: 10,
                margin: 10
            }}>Social Media Handles</h4>
            <input style = {{
                padding: 10,
                margin: 10
            }}type = "text" placeholder="Twitter" onChange={function(e){
                const value = e.target.value;
                setTwitter(value);
            }}></input><br />
            <input style = {{
                padding: 10,
                margin: 10
            }}type = "text" placeholder="linkedIn" onChange={function(e){
                const value = e.target.value;
                setLinkedIn(value);
            }}></input><br />
            <input style = {{
                padding: 10,
                margin: 10
            }}type = "text" placeholder="Instagram" onChange={function(e){
                const value = e.target.value;
                setInstagram(value);
            }}></input><br />
            <button style = {{
                padding: 10,
                margin: 10
            }} onClick={() => {
                axios.post("http://localhost:3000/user/signup", {
                    name : name,
                    description : description,
                    interests : interests,
                    twitter : twitter,
                    linkedIn : linkedIn,
                    instagram : instagram
                })
                .then(() => {
                    alert("User added");
                })
            }}>Create User</button>
        </div>
        </>
        
    )
}

//delete wala button bhi toh hoga na jo user ko nhi dikhega /; how is that posssible 











// create a user 