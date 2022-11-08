import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

const{providerLogin, signIn} = useContext(AuthContext);
const navigate = useNavigate();

//google provider
const googleProvider = new GoogleAuthProvider()

//implementing google sign in
const handleGoogleSignIn = () =>{
providerLogin(googleProvider)
.then(result => {
  const user = result.user;
  console.log(user);
})
.catch(error => console.error(error))
}

//login
const handleSignIn = event => {
  event.preventDefault();
  const form = event.target;
const email = form.email.value;
const password = form.password.value;
signIn(email,password)
.then(result => {
  const user = result.user;
  console.log(user);
  navigate('/');
  form.reset();
})
.catch(error => console.error(error))
}

    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>


    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center pt-7">Login Now</h1>

      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p className='text-lg'> New here?
             <Link to='/register' className=" text-lg label-text-alt link link-hover"> Register.</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary mb-5">Login</button>
          <button onClick={handleGoogleSignIn} className="btn btn-primary">Login With Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;