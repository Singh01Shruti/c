import {useSetRecoilState} from "recoil"
import {useNavigate} from "react-router-dom"
import { inputAtom } from "../store/atoms/input";

export default function Landing() {
    const setInput = useSetRecoilState(inputAtom);
    return (
    <div>
    <input type = "text" placeholder="Enter your Name" onChange={(e) => setInput(e.target.value)}></input>
    <ToNavigate />
    </div>
    )
}

function ToNavigate(){
    const navigate = useNavigate();

    return(
        <button onClick={() => navigate("/wishes")}>Done</button>
    )
}

