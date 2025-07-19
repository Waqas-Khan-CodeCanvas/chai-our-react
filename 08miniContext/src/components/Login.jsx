
import  {useState , useContext,} from 'react'
import userContext from '../context/userContext'


function Login() {
    const [userName ,setUsername] = useState('');
    const [userPassword ,setUserPassword] = useState('');

    const {setUser} = useContext(userContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser(userName , userPassword);
        console.log(userName , userPassword);
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Your Name'  value={userName} onChange={(e)=> setUsername(e.target.value)}/>
        <input type="password" placeholder='Your Password' value={userPassword} onChange={(e)=> setUserPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login