import React, {useContext} from 'react'
import userContext from '../context/userContext'

function Profile() {
    const {user} = useContext(userContext);

    if (!user) return <div>please login</div>
    return <div>Welcome : {user} </div>
}

export default Profile