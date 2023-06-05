import React, { useState } from "react";

function SignIn({ onRouteChange }) {
  const [email , setEmail ] = useState(null);
  const [password , setPassword] =  useState(null);

  const handleEmailChange = (e) =>{

    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email , password)
    onRouteChange("home")
  }
  return (
    <div className="bg-grey-lighter  min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true"  />
              <div className="space-y-6 rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative bg-black opacity-60 hover:opacity-100 block w-full rounded-t-md border-0 py-2 lg:text-lg text-white font-bold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-center"
                    placeholder="Email address"
                    onChange={handleEmailChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only ">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative bg-black opacity-60 hover:opacity-100 block w-full rounded-b-md border-0 py-2 text-white ring-1 text-xl ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-center"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <p
                    onClick={() => onRouteChange("register")}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Register
                  </p>
                </div>
              </div>

              <div>
                <button
              
                  type="submit"
              
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
