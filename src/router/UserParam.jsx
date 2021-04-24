import { Button } from '@material-ui/core';
import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom'

const User = () => {

    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    
    return (
        <div>
            <h1>Hello, This is Special User Page: {fname} {lname}</h1>
            <p>Current location: {location.pathname}</p>
            {location.pathname === '/user/Awais/Asghar' ? (<Button
                variant="contained"
                color="primary"
                size="small"
                style={{margin: 10}}
                onClick={() => history.push('/home')}>
                Home Page
            </Button>
            ) : null}
        </div>
    )
}

export default User
