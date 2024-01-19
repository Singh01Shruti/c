import { useNavigate } from "react-router-dom"


export default function Landing(){
    return (
        <div>
        <h1>Login Via OTP</h1>
        <input type = "number" placeholder="Enter your Number"></input>
        <ToNavigate />
        </div>
    )
}

export function ToNavigate(){
const navigate = useNavigate();

    return(
        <>
        <button onClick={() => navigate("/login")}>Send OTP</button>
        </>
    )
}