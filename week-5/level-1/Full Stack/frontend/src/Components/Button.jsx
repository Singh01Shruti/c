
import linkedInImage from '../assets/images/linkedIn.jpg'; 
import twitterImage from '../assets/images/Twitter.svg.png'; 
import instagramImage from '../assets/images/instagram.jpg'; 
export default function Button(){

    return(
        <>
        <button style = {{ width:'12%', marginRight: '3px'}}><img src = {linkedInImage} style={{ width:'100%' }}></img></button>
        <button style={{ width:'13.5%' , marginRight: '3px'}}><img src = {twitterImage} style={{ width:'100%' }}></img></button>
        <button style={{ width:'20%', marginRight: '3px'}}><img src = {instagramImage} style={{ width:'100%' }}></img></button>
        </>
    )
}
