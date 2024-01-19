import { useRecoilValue } from "recoil"
import { inputAtom } from "../store/atoms/input"

export default function Wish(){
    const input = useRecoilValue(inputAtom)
    return(
        <div>
            <div>Happy BD {input}</div>
            <div>Good Luck {input}</div>
            <div>KEEP IT GOING GIRLLL</div>
        </div>
    )
}