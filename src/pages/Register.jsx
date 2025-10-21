import React, { use,useeState } from 'react';
import { Link, useNavigate, } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const [nameeror,setnameerror] = useeState("")
  const {createUser,setUser,updateUser} = use(AuthContext)
const navigate = useNavigate()
    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target
        const name =form.name.value;
        if(name.length < 5){
          setnameerror("name shold be 5 char")
          return
        }else{
          setnameerror("")
        }
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        createUser(email,password)
        .then(res=>{
          const user = res.user;
          updateUser({displayName:name,photoURL:photo})
          .then(()=>{
          setUser({...user,displayName:name,photoURL:photo})
          navigate("/")
          }).catch(error=>{
console.log(error)
setUser(user)
          })
           .catch(error=>{
          const message = error.message;
          alert(message)
        })
        })

    }
    return (
         <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
            //name
                 <label className="label">Name</label>
          <input required name='name' type="text" className="input" placeholder="Your Name" />
          {nameeror && <p>{nameeror}</p>}
            //email
          <label className="label">Email</label>
          <input required name='email' type="text" className="input" placeholder="Email" />
          //photo
                    <label className="label">Photo URL</label>
          <input required name='photo' type="text" className="input" placeholder="Photo URL" />
          //password
          <label className="label">Password</label>
          <input required name='password' type="password" className="input" placeholder="Password" />

        
          <button className="btn btn-neutral mt-4" type='submit'>Register</button>
            <p className='font-semibold text-center pt-5'>Already have an account? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
        </fieldset>
      </form>
    </div>
       </div>
    );
};

export default Register;