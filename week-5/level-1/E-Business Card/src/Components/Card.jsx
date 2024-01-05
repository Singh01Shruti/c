import Button from "./Button";
export default function Card(props){
    return (
        <>
            <div className ="card" style = {{
                boxShadow : '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s',
                width: '30%',
                height : '70%',
                '&:hover': {
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
                },
                padding: '2px 16px'
            }}>
                <h4><b>{props.user.username}</b></h4>
                <p>{props.user.description}</p>
                <p>{props.user.Interests}</p>
                <Button></Button>
            </div>
        </>
    );
}


