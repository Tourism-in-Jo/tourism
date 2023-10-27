import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900 py-6'>
        <div className='flex flex-col items-center justify-center px-6 py-8 lg:py-0 mx-auto'>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-3 sm:p-8">
                    <h1 className="text-transparent bg-clip-text px-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        {/* first name */}
                        <div>
                            <label for="firstName" className="text-start ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input type="firstName" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first name" required="true" />
                        </div>
                        {/* last name */}
                        <div>
                            <label for="lastName" className="text-start ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input type="lastName" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="last name" required="true" />
                        </div>
                        {/* username */}
                        <div>
                            <label for="userName" className="text-start ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="username" name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="true" />
                        </div>
                        {/* email */}
                        <div>
                            <label for="email" className="text-start ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" />
                        </div>
                        {/* phone */}
                        <div>
                            <label for="phone" className="text-start ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="077 555 5555" required="true" />
                        </div>
                        {/* password */}
                        <div>
                            <label for="password" className="text-start ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                        </div>
                        {/* confirm */}
                        <div>
                            <label for="confirmPassword" className="text-start ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="confirm-password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                        </div>
                        <button type="submit" className="w-full text-white bg-gradient-to-r from-cyan-800 to-blue-700 hover:from-[#006f6f7a] hover:to-[#00249b9c] hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                        </p>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Go back</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
