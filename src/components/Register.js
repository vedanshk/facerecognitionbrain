import React , {useState} from "react";

function Register({onRouteChange}) {
  const [email , setEmail ] = useState(null);
  const [password , setPassword] =  useState(null);
  const [name , setName ] = useState('');

  const handleNameChange  = (e) =>{
    setName(e.target.value);
  }
  const handleEmailChange = (e) =>{

    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    onRouteChange('home')
    
  }
  return (
    <div className="bg-grey-lighter  min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-transparent px-6 py-8 rounded shadow-md text-white w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block bg-black opacity-60 hover:opacity-100   border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            onChange={handleNameChange}
          />

          <input
            type="text"
            className="block bg-black opacity-60 hover:opacity-100 border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />

          <input
            type="password"
            className="block bg-black opacity-60 hover:opacity-100 border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
  

          <button
            type="submit"
            className="w-full bg-cyan-500 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={handleSubmit}

          >
            Create Account
          </button>

   
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue hover:cursor-pointer"
            onClick={()=> onRouteChange('signin')}
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default Register;
