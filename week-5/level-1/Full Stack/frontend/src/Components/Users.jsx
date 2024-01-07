import Button from "./Button"

export function Users({users}){
    return(
        <div style = {{display : 'flex'}}>
    {users.map(function(user){
       
       return(
            <div 
                key={user.id}
                className ="card" style = {{
                boxShadow : '0 4px 8px 0 rgba(0,0,0,0.2)',
                transition: '0.3s',
                width: '30%',
                height : '70%',
                '&:hover': {
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
                },
                padding: '2px 16px'
            }}>
                <div style={{ flex: '0 0 auto' }}>
                <h4><b>{user.name}</b></h4>
                <p>{user.description}</p>
                <p>{user.interests}</p>
                <Button></Button>
                </div>
            </div>
           
       ) 
    })}
      </div>
 )
}



//display users in a card format



















//take all users and card display