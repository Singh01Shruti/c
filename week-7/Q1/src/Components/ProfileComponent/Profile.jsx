import './Profile.css'
import Picture from "../../assets/images/picture.jpeg"

export default function Profile(){
    return (
        <div className='main'>
            <img alt="Avatar" className="avatar" src = {Picture}></img>
            <div className='main-section'>
             <h1>Shruti Singh 22</h1>
             <p>Bangalore</p>
            </div>
            <div className='info'>
            <div className='info1'>
                <h1>800K</h1>
                <h3>Followers</h3>
            </div>
            <div className='info2'>
                <h1>800K</h1>
                <h3>Followers</h3>
                </div>
            <div className='info3'>
                <h1>800K</h1>
                <h3>Followers</h3>
            </div>
            </div>
        </div>
    )
}