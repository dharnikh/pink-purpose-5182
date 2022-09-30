import React,{useState} from 'react'

const Login = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[entry,setEntry] = useState([])

    const handleSubmit =(e)=>{
        e.preventDefault()
        const new_entry = setEntry([...entry,new_entry])


    }
    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
  return (
    <div className={styles.form_nik}>
      <form onSubmit={handleSubmit}>
        <div>
        <label >email</label>
        <br/>
        <input value={email} onChange={handleEmail} name="email" id='email'></input>
        </div>
        <div>
        <label>Password</label>
        <br/>
        <input value={password} onChange={handlePassword} name="password" id='password'></input>
        </div>
        <input className='btn' type="submit" value="Submit"></input>
     
      </form>
    </div>
  )
}

export default Login
