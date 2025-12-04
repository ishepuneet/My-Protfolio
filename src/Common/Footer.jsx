import React from 'react'


import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';
import { app } from '../Fire';

export default function Footer() {

    const db = getDatabase(app);
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const Google = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log("Google login successful:", user);
            })
            .catch((error) => {
                console.error("Google login error:", error);
            });

    };


    React.useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                if (result) {
                    const user = result.user;
                    console.log("Redirect login user:", user);
                }
            })
            .catch((error) => {
                console.error("Redirect login failed:", error);
            });
    }, []);







    const userData = (e) => {
        e.preventDefault();

        const userObj = {
            name: e.target.ufirst_name.value,
            lastname: e.target.ulast_name.value,
            email: e.target.umail.value,
            phone: e.target.uphone.value,
            company: e.target.ucompany.value,
            comment: e.target.ucomment.value,
        };

        const Uid = uuidv4(); // Generate a unique ID for the user

        console.log(Uid);

        set(ref(db, 'portolio-data/' + Uid), userObj)

        e.target.reset(); // Reset the form after submission

    };


    return (
        <section
            className="text-white py-5 px-4 rounded-4xl service-sec my-20 sm:px-6 lg:px-20 "
            id="Contact">

            <h1 className="text-white text-center text-4xl sm:text-5xl service-head md:text-6xl lg:text-7xl my-10">
                Connect <span className="text-green-600 font-bold">With</span> Me..
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 p-6 rounded-xl">

                <div className="flex justify-center items-center">
                    <img src='/img/call.png' alt="Contact Image"
                        className="max-w-full h-auto rounded-xl shadow-2xl/100 " />
                </div>

                <form className="max-w-md my-10 " onSubmit={userData}>
                    {/* <!-- Email --> */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="umail" id="email" autocomplete="email"
                            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                            placeholder=" " required />
                        <label for="email"
                            className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                            Email address</label>
                    </div>

                    {/* <!-- First & Last Name --> */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="ufirst_name" id="first_name" autocomplete="given-name"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                                placeholder=" " required />
                            <label for="first_name"
                                className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                                First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="ulast_name" id="last_name" autocomplete="family-name"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                                placeholder=" " required />
                            <label for="last_name"
                                className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                                Last name</label>
                        </div>
                    </div>

                    {/* <!-- Phone & Company --> */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" name="uphone" id="phone" autocomplete="tel"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                                placeholder=" " required />
                            <label for="phone"
                                className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                                Phone number</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="ucompany" id="company" autocomplete="organization"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                                placeholder=" " required />
                            <label for="company"
                                className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">
                                Company (Ex. Google)</label>
                        </div>
                    </div>


                    <div className="my-10">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" name='ucomment' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>


                    <div className="flex flex-wrap gap-10">
                        {/* <!-- Submit --> */}
                        <button type="submit"
                            className="w-full sm:w-auto rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 cursor-pointer focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </button>

                        {/* <button type="button"
                            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2" onClick={Google}>
                            Sign in with Google
                        </button> */}
                    </div>

                </form>



            </div>
        </section>
    )
}
