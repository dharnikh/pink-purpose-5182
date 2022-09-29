import React,{useState} from 'react'

const Login = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[entry,setEntry] = useState([])

    const handleSubmit =(e)=>{
        e.preventDefault()
        setEntry([...entry])


    }
    const handleEmail =()=>{
        setEmail(e.target.value)
    }
    const handlePassword =()=>{
        setPassword(e.target.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label forHtml="email"></label>
        <input value={email} onChange={handleEmail} name="email" id='email'></input>
        </div>
        <div>
        <label forHtml="password"></label>
        <input value={password} onChange={handlePassword} name="password" id='password'></input>
        </div>
     
      </form>
    </div>
  )
}

export default Login
